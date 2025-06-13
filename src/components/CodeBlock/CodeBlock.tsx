import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Tooltip,
  Typography,
  Paper,
  useTheme,
  Snackbar,
  Alert,
} from '@mui/material';
import Editor from '@monaco-editor/react';
import { MaterialIcon } from '../MaterialIcon/MaterialIcon';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  height?: string | number;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  title,
  height = 200,
  readOnly = true,
  onChange,
}) => {
  const theme = useTheme();
  const [copied, setCopied] = useState(false);
  const [showCopyAlert, setShowCopyAlert] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setShowCopyAlert(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          overflow: 'hidden',
        }}
      >
        {title && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 2,
              py: 1,
              backgroundColor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography variant="subtitle2" color="text.secondary">
              {title}
            </Typography>
            <Tooltip title={copied ? 'Copied!' : 'Copy code'}>
              <IconButton size="small" onClick={handleCopy}>
                <MaterialIcon 
                  icon={copied ? 'check' : 'content_copy'} 
                  color={copied ? 'primary' : 'inherit'}
                />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        
        <Box sx={{ position: 'relative' }}>
          {!title && (
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 10,
              }}
            >
              <Tooltip title={copied ? 'Copied!' : 'Copy code'}>
                <IconButton
                  size="small"
                  onClick={handleCopy}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  <MaterialIcon 
                    icon={copied ? 'check' : 'content_copy'} 
                    color={copied ? 'primary' : 'inherit'}
                  />
                </IconButton>
              </Tooltip>
            </Box>
          )}
          
          <Editor
            height={height}
            language={language}
            value={code}
            onChange={(value) => onChange?.(value || '')}
            theme={theme.palette.mode === 'dark' ? 'vs-dark' : 'light'}
            options={{
              readOnly,
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 14,
              fontFamily: '"Fira Code", "JetBrains Mono", Monaco, "Cascadia Code", "Roboto Mono", monospace',
              lineNumbers: 'on',
              folding: false,
              wordWrap: 'on',
              automaticLayout: true,
            }}
          />
        </Box>
      </Paper>
      
      <Snackbar
        open={showCopyAlert}
        autoHideDuration={2000}
        onClose={() => setShowCopyAlert(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success" variant="filled">
          Code copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
};