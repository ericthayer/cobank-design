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
import { styled } from '@mui/material/styles';
import { useTheme as useCustomTheme } from '../../contexts/ThemeContext';
import { MaterialIcon } from '../MaterialIcon/MaterialIcon';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
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
  onMenuToggle: () => void;
  isDrawerOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchChange,
  onMenuToggle,
  isDrawerOpen,
}) => {
  const theme = useTheme();
  const { isDarkMode, toggleDarkMode } = useCustomTheme();

  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="inherit"
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar>
        {/* Menu Toggle Button - Always visible */}
        <IconButton
          color="inherit"
          aria-label={
            isDrawerOpen ? 'close navigation menu' : 'open navigation menu'
          }
          onClick={onMenuToggle}
          edge="start"
          sx={{
            mr: 1,
            minWidth: 44,
            minHeight: 44,
            transition: theme.transitions.create(
              ['background-color', 'transform'],
              {
                duration: theme.transitions.duration.short,
              }
            ),
            // transform: isDrawerOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
            '&:focus-visible': {
              outline: `2px solid ${theme.palette.primary.main}`,
              outlineOffset: 2,
            },
          }}
        >
          <MaterialIcon icon={isDrawerOpen ? 'menu' : 'menu'} />
        </IconButton>

        {/* Logo */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 1,
          }}
        >
          <Box
            component="img"
            src={
              isDarkMode
                ? '/media/images/logo-cobank-light.svg'
                : '/media/images/logo-cobank-dark.svg'
            }
            alt="CoBank Design System"
            sx={{
              height: 'clamp(1.125rem, 1.5rem, 1.875rem)',
              width: 'auto',
              cursor: 'pointer',
              transition: theme.transitions.create(['opacity'], {
                duration: theme.transitions.duration.short,
              }),
              '&:hover': {
                opacity: 0.8,
              },
              filter: isDarkMode ? 'grayscale(1), ' : 'none',
            }}
            onClick={() => (window.location.href = '/')}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {/* Hide search on very small screens */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
          </Box>

          <IconButton
            color="inherit"
            onClick={toggleDarkMode}
            aria-label={
              isDarkMode ? 'switch to light mode' : 'switch to dark mode'
            }
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
            <MaterialIcon icon={isDarkMode ? 'light_mode' : 'dark_mode'} />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={() => {
              /* TODO: Open feedback drawer */
            }}
            aria-label="Open feedback form"
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
            <MaterialIcon icon="feedback" />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
