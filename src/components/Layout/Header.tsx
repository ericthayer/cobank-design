import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  useTheme,
} from '@mui/material';
import { grey, deepPurple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { useTheme as useCustomTheme } from '../../contexts/ThemeContext';
import { MaterialIcon } from '../MaterialIcon/MaterialIcon';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.85),
  '&:hover': {
    // backgroundColor: alpha(theme.palette.common.white, 0.75),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  borderColor: theme.palette.divider,
  borderWidth: 1,
  borderRadius: theme.shape.borderRadius,
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

interface HeaderProps {
  onSearchChange: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  const theme = useTheme();
  const { isDarkMode, toggleDarkMode } = useCustomTheme();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          borderColor: theme.palette.divider,
          borderWidth: 1,
        }}
      >
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          CoBank Design System
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Search>
            <SearchIconWrapper>
              <MaterialIcon icon="search" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </Search>

          <IconButton
            color="inherit"
            onClick={toggleDarkMode}
            aria-label="toggle dark mode"
          >
            <MaterialIcon icon={isDarkMode ? 'light_mode' : 'dark_mode'} />
          </IconButton>

          <IconButton
            color="inherit"
            href="https://github.com/cobank"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
          >
            <MaterialIcon icon="code" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
