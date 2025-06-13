import React from 'react';
import {
  Box,
  Typography,
  Paper,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

const typographyVariants = [
  { variant: 'h1', size: '3.5rem', weight: 700, lineHeight: 1.2, usage: 'Page titles, hero headers' },
  { variant: 'h2', size: '2.5rem', weight: 600, lineHeight: 1.3, usage: 'Section headers' },
  { variant: 'h3', size: '2rem', weight: 600, lineHeight: 1.4, usage: 'Subsection headers' },
  { variant: 'h4', size: '1.5rem', weight: 500, lineHeight: 1.4, usage: 'Card titles, form sections' },
  { variant: 'h5', size: '1.25rem', weight: 500, lineHeight: 1.5, usage: 'Component titles' },
  { variant: 'h6', size: '1rem', weight: 500, lineHeight: 1.5, usage: 'Small headers' },
  { variant: 'body1', size: '1rem', weight: 400, lineHeight: 1.6, usage: 'Default body text' },
  { variant: 'body2', size: '0.875rem', weight: 400, lineHeight: 1.5, usage: 'Secondary text, captions' },
];

const usageCode = `import { Typography } from '@mui/material';

// Using typography variants
<Typography variant="h1">Main Page Title</Typography>
<Typography variant="h2">Section Header</Typography>
<Typography variant="body1">
  This is the default body text with optimal readability.
</Typography>
<Typography variant="body2" color="text.secondary">
  This is secondary text with muted color.
</Typography>

// Custom typography with theme
const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
  },
});`;

export const TypographyPage: React.FC = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Typography
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
        Our typography system is built with Inter as the primary font family, 
        providing excellent readability and a modern, professional appearance 
        across all digital interfaces.
      </Typography>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Type Scale
        </Typography>
        <Paper elevation={0} sx={{ border: `1px solid ${theme.palette.divider}`, p: 3 }}>
          {typographyVariants.slice(0, 6).map(({ variant }) => (
            <Box key={variant} sx={{ mb: 2 }}>
              <Typography variant={variant as any} component="div">
                {variant.toUpperCase()} - The quick brown fox jumps over the lazy dog
              </Typography>
            </Box>
          ))}
        </Paper>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Body Text
        </Typography>
        <Paper elevation={0} sx={{ border: `1px solid ${theme.palette.divider}`, p: 3 }}>
          <Typography variant="body1" gutterBottom>
            Body 1 - This is the default body text used for most content. It provides 
            optimal readability with a 1.6 line height and 1rem font size.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Body 2 - This is used for secondary text, captions, and supporting content. 
            It's slightly smaller at 0.875rem with a 1.5 line height.
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Typography Specifications
        </Typography>
        <TableContainer component={Paper} elevation={0} sx={{ border: `1px solid ${theme.palette.divider}` }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Variant</strong></TableCell>
                <TableCell><strong>Size</strong></TableCell>
                <TableCell><strong>Weight</strong></TableCell>
                <TableCell><strong>Line Height</strong></TableCell>
                <TableCell><strong>Usage</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {typographyVariants.map((row) => (
                <TableRow key={row.variant}>
                  <TableCell component="th" scope="row">
                    <code>{row.variant}</code>
                  </TableCell>
                  <TableCell>{row.size}</TableCell>
                  <TableCell>{row.weight}</TableCell>
                  <TableCell>{row.lineHeight}</TableCell>
                  <TableCell>{row.usage}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Font Family
        </Typography>
        <Paper elevation={0} sx={{ border: `1px solid ${theme.palette.divider}`, p: 3 }}>
          <Typography variant="body1" gutterBottom>
            <strong>Primary:</strong> Inter
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Inter is our primary font family, designed for digital interfaces with 
            excellent readability at all sizes.
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ mt: 2 }}>
            <strong>Fallback Stack:</strong> "Inter", "Roboto", "Helvetica", "Arial", sans-serif
          </Typography>
        </Paper>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Usage Example
        </Typography>
        <CodeBlock
          code={usageCode}
          language="typescript"
          title="Typography Usage"
          height={400}
        />
      </Box>
    </Box>
  );
};