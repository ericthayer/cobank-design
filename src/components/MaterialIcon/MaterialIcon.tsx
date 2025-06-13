import React from 'react';
import { Box, SxProps, Theme } from '@mui/material';

interface MaterialIconProps {
  icon: string;
  sx?: SxProps<Theme>;
  fontSize?: 'inherit' | 'small' | 'medium' | 'large';
  color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
  onClick?: () => void;
  className?: string;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({
  icon,
  sx,
  fontSize = 'medium',
  color = 'inherit',
  onClick,
  className,
}) => {
  const getFontSize = () => {
    switch (fontSize) {
      case 'small':
        return '20px';
      case 'large':
        return '36px';
      case 'inherit':
        return 'inherit';
      default:
        return '24px';
    }
  };

  const getColor = (theme: Theme) => {
    switch (color) {
      case 'primary':
        return theme.palette.primary.main;
      case 'secondary':
        return theme.palette.secondary.main;
      case 'action':
        return theme.palette.action.active;
      case 'disabled':
        return theme.palette.action.disabled;
      case 'error':
        return theme.palette.error.main;
      default:
        return 'inherit';
    }
  };

  return (
    <Box
      component="span"
      className={`material-icons ${className || ''}`}
      onClick={onClick}
      sx={{
        fontSize: getFontSize(),
        color: (theme) => getColor(theme),
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...sx,
      }}
    >
      {icon}
    </Box>
  );
};