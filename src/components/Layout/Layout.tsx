import React, { useState } from 'react';
import { Box, Toolbar, useTheme, useMediaQuery } from '@mui/material';
import { Header } from './Header';
import { ResponsiveDrawer } from './ResponsiveDrawer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  // Use md breakpoint (960px) for mobile/desktop distinction
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const drawerWidth = 280;

  return (
    <Box sx={{ display: 'flex' }}>
      <Header 
        onSearchChange={setSearchQuery} 
        onMenuToggle={handleMenuToggle}
        isDrawerOpen={drawerOpen}
      />
      
      <ResponsiveDrawer 
        open={drawerOpen}
        onClose={handleDrawerClose}
        isMobile={isMobile}
        drawerWidth={drawerWidth}
      />
      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          minHeight: '100vh',
          backgroundColor: 'background.default',
          // Dynamic margin and width based on drawer state and screen size
          marginLeft: {
            xs: 0, // Mobile: always 0 (overlay)
            md: drawerOpen ? drawerOpen : 0, // Desktop: conditional margin
          },
          width: {
            xs: '100%', // Mobile: full width
            md: drawerOpen ? undefined : `calc(100% - 280px)`, // Desktop: conditional width
          },
          transition: theme.transitions.create(['margin-left', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Toolbar />
        <Box sx={{ mt: 2 }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};