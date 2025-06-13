import React, { useState } from 'react';
import {
  Box,
  Paper,
  Tabs,
  Tab,
  Typography,
  useTheme,
} from '@mui/material';
import { CodeBlock } from '../CodeBlock/CodeBlock';

interface ComponentPreviewProps {
  title: string;
  description?: string;
  component: React.ReactNode;
  code: string;
  language?: string;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  title,
  description,
  component,
  code,
  language = 'tsx',
}) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      
      {description && (
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
      )}
      
      <Paper
        elevation={0}
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        <Tabs
          value={activeTab}
          onChange={(_, newValue) => setActiveTab(newValue)}
          sx={{
            borderBottom: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.50',
          }}
        >
          <Tab label="Preview" />
          <Tab label="Code" />
        </Tabs>
        
        {activeTab === 0 && (
          <Box
            sx={{
              p: 3,
              minHeight: 200,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme.palette.background.default,
            }}
          >
            {component}
          </Box>
        )}
        
        {activeTab === 1 && (
          <CodeBlock
            code={code}
            language={language}
            height={400}
          />
        )}
      </Paper>
    </Box>
  );
};