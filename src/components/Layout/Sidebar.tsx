import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Divider,
  Collapse,
  useTheme,
} from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { MaterialIcon } from '../MaterialIcon/MaterialIcon';

const drawerWidth = 280;

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

export const Sidebar: React.FC = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [openItems, setOpenItems] = React.useState<string[]>([
    'Design Tokens',
    'Components',
  ]);

  const handleToggle = (title: string) => {
    setOpenItems((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
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
                navigate(item.path);
              }
            }}
            selected={isActive}
            sx={{
              borderRadius: 1,
              mx: 1,
              my: 0.5,
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
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
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

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      {/* <Divider /> */}
      <List
        sx={{
          py: 2,
          px: 1,
        }}
      >
        {navigationItems.map((item) => renderNavigationItem(item))}
      </List>
    </Drawer>
  );
};