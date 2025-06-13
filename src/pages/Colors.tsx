import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Chip,
  useTheme,
} from '@mui/material';
import { colors } from '../theme';
import { CodeBlock } from '../components/CodeBlock/CodeBlock';

interface ColorPaletteProps {
  name: string;
  colors: Record<string, string>;
  description?: string;
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ name, colors: colorShades, description }) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        {name}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
      )}
      <Grid container spacing={1}>
        {Object.entries(colorShades).map(([shade, color]) => (
          <Grid item xs={12} sm={6} md={2.4} key={shade}>
            <Paper
              elevation={0}
              sx={{
                border: `1px solid ${theme.palette.divider}`,
                borderRadius: 2,
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.02)',
                },
              }}
              onClick={() => navigator.clipboard.writeText(color)}
            >
              <Box
                sx={{
                  height: 80,
                  backgroundColor: color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: parseInt(shade) > 500 ? 'white' : 'black',
                    fontWeight: 500,
                  }}
                >
                  {shade}
                </Typography>
              </Box>
              <Box sx={{ p: 1 }}>
                <Typography variant="caption" display="block">
                  {color}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const usageCode = `import { colors } from './theme';

// Using in styled components
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: colors.primary[600],
  color: 'white',
  '&:hover': {
    backgroundColor: colors.primary[700],
  },
}));

// Using with MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary[600],
      light: colors.primary[400],
      dark: colors.primary[700],
    },
  },
});`;

export const Colors: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Colors
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
        Our color system is built on a foundation of meaningful, accessible colors 
        that work harmoniously together. Each color has multiple shades to provide 
        flexibility while maintaining consistency.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Usage Guidelines
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
          <Chip label="Click any color to copy" color="primary" variant="outlined" />
          <Chip label="WCAG AA Compliant" color="success" variant="outlined" />
        </Box>
      </Box>

      <ColorPalette
        name="Primary"
        colors={colors.primary}
        description="Used for primary actions, links, and key brand elements"
      />

      <ColorPalette
        name="Secondary"
        colors={colors.secondary}
        description="Used for secondary actions, backgrounds, and neutral elements"
      />

      <ColorPalette
        name="Accent"
        colors={colors.accent}
        description="Used for highlights, special features, and call-to-action elements"
      />

      <ColorPalette
        name="Success"
        colors={colors.success}
        description="Used for success states, confirmations, and positive feedback"
      />

      <ColorPalette
        name="Warning"
        colors={colors.warning}
        description="Used for warnings, cautions, and important notices"
      />

      <ColorPalette
        name="Error"
        colors={colors.error}
        description="Used for errors, validation messages, and destructive actions"
      />

      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Usage Example
        </Typography>
        <CodeBlock
          code={usageCode}
          language="typescript"
          title="colors.ts"
          height={300}
        />
      </Box>
    </Box>
  );
};