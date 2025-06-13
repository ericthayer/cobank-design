import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon/MaterialIcon';

const features = [
  {
    icon: 'palette',
    title: 'Design Tokens',
    description: 'Consistent colors, typography, and spacing system',
    path: '/colors',
  },
  {
    icon: 'code',
    title: 'Components',
    description: 'Reusable UI components with live examples',
    path: '/components/buttons',
  },
  {
    icon: 'devices',
    title: 'Responsive',
    description: 'Mobile-first design principles and breakpoints',
    path: '/patterns/layout',
  },
  {
    icon: 'accessibility',
    title: 'Accessible',
    description: 'WCAG 2.1 AA compliant components and patterns',
    path: '/resources/icons',
  },
];

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          CoBank Design System
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
          The single source of truth for CoBank's visual design language
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
          <Chip label="v1.0.0" color="primary" />
          <Chip label="React" variant="outlined" />
          <Chip label="Material-UI" variant="outlined" />
          <Chip label="TypeScript" variant="outlined" />
        </Box>
        <Typography variant="body1" sx={{ maxWidth: '600px', lineHeight: 1.6 }}>
          Our design system provides a comprehensive set of design guidelines, 
          reusable components, and development resources to help teams create 
          consistent, accessible, and beautiful user experiences across all 
          CoBank products.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 6 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
              onClick={() => navigate(feature.path)}
            >
              <CardContent>
                <Box sx={{ color: 'primary.main', mb: 2 }}>
                  <MaterialIcon icon={feature.icon} fontSize="large" />
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Quick Start
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Get started with the CoBank Design System in your React application:
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/colors')}
          >
            Browse Design Tokens
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => navigate('/components/buttons')}
          >
            View Components
          </Button>
        </Box>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Recent Updates
        </Typography>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <MaterialIcon icon="update" color="primary" />
              <Typography variant="h6">
                Version 1.0.0 Released
              </Typography>
              <Chip label="Latest" color="success" size="small" />
            </Box>
            <Typography variant="body2" color="text.secondary">
              Initial release of the CoBank Design System with complete component 
              library, design tokens, and comprehensive documentation.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};