import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

const spacingScale = [
  { token: '0', pixels: '0px', usage: 'No spacing' },
  { token: '1', pixels: '8px', usage: 'Extra small spacing' },
  { token: '2', pixels: '16px', usage: 'Small spacing' },
  { token: '3', pixels: '24px', usage: 'Medium spacing' },
  { token: '4', pixels: '32px', usage: 'Large spacing' },
  { token: '5', pixels: '40px', usage: 'Extra large spacing' },
  { token: '6', pixels: '48px', usage: 'Section spacing' },
  { token: '8', pixels: '64px', usage: 'Large section spacing' },
  { token: '10', pixels: '80px', usage: 'Extra large section spacing' },
  { token: '12', pixels: '96px', usage: 'Page-level spacing' },
];

const usageCode = `import { Box, Typography } from '@mui/material';

// Using spacing tokens with sx prop
<Box sx={{ p: 3, m: 2 }}>
  <Typography variant="h4" sx={{ mb: 2 }}>
    Title with margin bottom
  </Typography>
  <Box sx={{ 
    display: 'flex', 
    gap: 1,        // 8px gap
    p: 2,          // 16px padding
    mt: 3,         // 24px margin top
  }}>
    Content with consistent spacing
  </Box>
</Box>

// Using spacing in styled components
const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),      // 24px
  marginBottom: theme.spacing(2), // 16px
  '& .content': {
    marginTop: theme.spacing(1),  // 8px
  },
}));`;

export const Spacing: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Spacing
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
        Our spacing system is based on an 8px grid system that ensures consistency 
        and visual harmony across all components and layouts. This creates a cohesive 
        user experience and makes maintenance easier.
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Spacing Scale
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          All spacing values are multiples of 8px, creating a consistent rhythm throughout the interface.
        </Typography>
        
        <Paper elevation={0} sx={{ border: `1px solid ${theme.palette.divider}`, p: 3 }}>
          <Grid container spacing={2}>
            {spacingScale.map(({ token, pixels }) => (
              <Grid item xs={12} sm={6} md={4} key={token}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Box
                    sx={{
                      width: pixels,
                      height: '24px',
                      backgroundColor: theme.palette.primary.main,
                      mr: 2,
                      minWidth: '8px',
                    }}
                  />
                  <Box>
                    <Typography variant="body2" component="div">
                      <code>theme.spacing({token})</code>
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {pixels}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Spacing Reference
        </Typography>
        <TableContainer component={Paper} elevation={0} sx={{ border: `1px solid ${theme.palette.divider}` }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Token</strong></TableCell>
                <TableCell><strong>Pixels</strong></TableCell>
                <TableCell><strong>Usage</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {spacingScale.map((row) => (
                <TableRow key={row.token}>
                  <TableCell>
                    <code>theme.spacing({row.token})</code>
                  </TableCell>
                  <TableCell>{row.pixels}</TableCell>
                  <TableCell>{row.usage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Layout Examples
        </Typography>
        
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Card Layout
          </Typography>
          <Paper 
            elevation={0} 
            sx={{ 
              border: `1px solid ${theme.palette.divider}`,
              p: 3,  // 24px padding
              mb: 2, // 16px margin bottom
            }}
          >
            <Typography variant="h5" sx={{ mb: 2 }}> {/* 16px margin bottom */}
              Card Title
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}> {/* 24px margin bottom */}
              This card demonstrates proper spacing using our 8px grid system.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}> {/* 8px gap */}
              <Box sx={{ 
                px: 2, py: 1, // 16px horizontal, 8px vertical padding
                backgroundColor: theme.palette.primary.main,
                color: 'white',
                borderRadius: 1,
              }}>
                Button
              </Box>
              <Box sx={{ 
                px: 2, py: 1,
                border: `1px solid ${theme.palette.primary.main}`,
                color: theme.palette.primary.main,
                borderRadius: 1,
              }}>
                Secondary
              </Box>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Form Layout
          </Typography>
          <Paper 
            elevation={0} 
            sx={{ 
              border: `1px solid ${theme.palette.divider}`,
              p: 3,
            }}
          >
            <Typography variant="h6" sx={{ mb: 3 }}>
              Contact Form
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Name
              </Typography>
              <Box sx={{ 
                height: 40,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                backgroundColor: theme.palette.background.default,
              }} />
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Email
              </Typography>
              <Box sx={{ 
                height: 40,
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 1,
                backgroundColor: theme.palette.background.default,
              }} />
            </Box>
            <Box sx={{ 
              px: 2, py: 1,
              backgroundColor: theme.palette.primary.main,
              color: 'white',
              borderRadius: 1,
              display: 'inline-block',
            }}>
              Submit
            </Box>
          </Paper>
        </Box>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Usage Example
        </Typography>
        <CodeBlock
          code={usageCode}
          language="typescript"
          title="Spacing Usage"
          height={400}
        />
      </Box>
    </Box>
  );
};