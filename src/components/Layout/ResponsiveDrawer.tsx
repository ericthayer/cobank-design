import React, { useEffect } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  useTheme,
  IconButton,
  Box,
  Typography,
  Toolbar,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { MaterialIcon } from '../MaterialIcon/MaterialIcon';

interface NavigationItem {
  title: string;
  path?: string;
  icon: string;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    title: 'Getting Started',
    path: '/',
    icon: 'article',
  },
  {
    title: 'Design Tokens',
    icon: 'auto_awesome',
    children: [
      { title: 'Colors', path: '/colors', icon: 'palette' },
      { title: 'Typography', path: '/typography', icon: 'text_fields' },
      { title: 'Spacing', path: '/spacing', icon: 'grid_view' },
    ],
  },
  {
    title: 'Components',
    icon: 'code',
    children: [
      { title: 'Buttons', path: '/components/buttons', icon: 'smart_button' },
      { title: 'Cards', path: '/components/cards', icon: 'credit_card' },
      { title: 'Forms', path: '/components/forms', icon: 'dynamic_form' },
      { title: 'Navigation', path: '/components/navigation', icon: 'menu' },
      {
        title: 'Data Display',
        path: '/components/data-display',
        icon: 'table_chart',
      },
    ],
  },
  {
    title: 'Patterns',
    icon: 'view_quilt',
    children: [
      { title: 'Layout', path: '/patterns/layout', icon: 'dashboard' },
      { title: 'Navigation', path: '/patterns/navigation', icon: 'navigation' },
      { title: 'Forms', path: '/patterns/forms', icon: 'assignment' },
    ],
  },
  {
    title: 'Resources',
    icon: 'folder',
    children: [
      { title: 'Icons', path: '/resources/icons', icon: 'emoji_symbols' },
      { title: 'Images', path: '/resources/images', icon: 'image' },
      { title: 'Animation', path: '/resources/animation', icon: 'animation' },
    ],
  },
];

interface ResponsiveDrawerProps {
  open: boolean;
  onClose: () => void;
  isMobile: boolean;
  drawerWidth: number;
}

export const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = ({ 
  open, 
  onClose, 
  isMobile, 
  drawerWidth 
}) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [openItems, setOpenItems] = React.useState<string[]>([
    'Design Tokens',
    'Components',
  ]);

  // Handle keyboard navigation and body scroll (mobile only)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleKeyDown);
      
      // Prevent body scroll when mobile drawer is open
      if (isMobile) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [open, onClose, isMobile]);

  const handleToggle = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    // Close drawer on mobile after navigation
    if (isMobile) {
      onClose();
    }
  };

  const renderNavigationItem = (item: NavigationItem, level = 0) => {
    const isOpen = openItems.includes(item.title);
    const isActive = location.pathname === item.path;
    const hasChildren = item.children && item.children.length > 0;

    return (
      <React.Fragment key={item.title}>
        <ListItem disablePadding sx={{ pl: level * 2 }}>
          <ListItemButton
            onClick={() => {
              if (hasChildren) {
                handleToggle(item.title);
              } else if (item.path) {
                handleNavigation(item.path);
              }
            }}
            selected={isActive}
            sx={{
              borderRadius: 1,
              mx: 1,
              my: 0.5,
              transition: theme.transitions.create(['background-color'], {
                duration: theme.transitions.duration.short,
              }),
              '&.Mui-selected': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                },
                '& .MuiListItemIcon-root': {
                  color: theme.palette.primary.contrastText,
                },
              },
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
              '&:focus-visible': {
                outline: `2px solid ${theme.palette.primary.main}`,
                outlineOffset: 2,
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <MaterialIcon icon={item.icon} />
            </ListItemIcon>
            <ListItemText primary={item.title} />
            {hasChildren && (
              <MaterialIcon icon={isOpen ? 'expand_less' : 'expand_more'} />
            )}
          </ListItemButton>
        </ListItem>

        {hasChildren && (
          <Collapse 
            in={isOpen} 
            timeout="auto" 
            unmountOnExit
            sx={{
              '& .MuiCollapse-wrapper': {
                transition: theme.transitions.create(['height'], {
                  duration: theme.transitions.duration.standard,
                }),
              },
            }}
          >
            <List component="div" disablePadding>
              {item.children?.map((child) =>
                renderNavigationItem(child, level + 1)
              )}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  const drawerContent = (
    <>
      {/* Mobile Header - Only show on mobile */}
      {isMobile && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 2,
            borderBottom: `1px solid ${theme.palette.divider}`,
            minHeight: 64,
          }}
        >
          <Typography variant="h6" noWrap>
            Navigation
          </Typography>
          <IconButton
            onClick={onClose}
            aria-label="close navigation menu"
            sx={{
              minWidth: 44,
              minHeight: 44,
              transition: theme.transitions.create(['background-color'], {
                duration: theme.transitions.duration.short,
              }),
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
              '&:focus-visible': {
                outline: `2px solid ${theme.palette.primary.main}`,
                outlineOffset: 2,
              },
            }}
          >
            <MaterialIcon icon="close" />
          </IconButton>
        </Box>
      )}

      {/* Desktop Toolbar Spacer - Only show on desktop */}
      {!isMobile && <Toolbar />}

      {/* Navigation List */}
      <List
        sx={{
          py: 2,
          px: 1,
          flex: 1,
          overflow: 'auto',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        {navigationItems.map((item) => renderNavigationItem(item))}
      </List>
    </>
  );

  if (isMobile) {
    // Mobile: Temporary drawer (overlay)
    return (
      <Drawer
        anchor="left"
        open={open}
        onClose={onClose}
        variant="temporary"
        ModalProps={{
          keepMounted: true, // Better performance on mobile
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            position: 'static',
            boxSizing: 'border-box',
            borderRight: `1px solid ${theme.palette.divider}`,
            transition: theme.transitions.create(['transform'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        {drawerContent}
      </Drawer>
    );
  }

  // Desktop: Persistent drawer (inline, pushes content)
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: open ? drawerWidth : 0,
        flexShrink: 0,
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: `1px solid ${theme.palette.divider}`,
          position: 'static',
          height: '100%',
          transition: theme.transitions.create(['transform'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
          transform: open ? 'translateX(0)' : `translateX(-${drawerWidth}px)`,
        },
      }}
    >
      {drawerContent}
    </Drawer>
  );
};