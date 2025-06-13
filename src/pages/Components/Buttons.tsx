import React from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Fab,
  ButtonGroup,
} from '@mui/material';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { MaterialIcon } from '../../components/MaterialIcon/MaterialIcon';

const buttonExamples = [
  {
    title: 'Primary Buttons',
    description: 'Used for primary actions and main call-to-actions.',
    component: (
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button variant="contained">Primary</Button>
        <Button variant="contained" startIcon={<MaterialIcon icon="add" />}>
          Add Item
        </Button>
        <Button variant="contained" endIcon={<MaterialIcon icon="download" />}>
          Download
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
      </Box>
    ),
    code: `<Button variant="contained">Primary</Button>
<Button variant="contained" startIcon={<MaterialIcon icon="add" />}>
  Add Item
</Button>
<Button variant="contained" endIcon={<MaterialIcon icon="download" />}>
  Download
</Button>
<Button variant="contained" disabled>
  Disabled
</Button>`,
  },
  {
    title: 'Secondary Buttons',
    description: 'Used for secondary actions and alternative choices.',
    component: (
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button variant="outlined">Secondary</Button>
        <Button variant="outlined" startIcon={<MaterialIcon icon="edit" />}>
          Edit
        </Button>
        <Button variant="outlined" endIcon={<MaterialIcon icon="share" />}>
          Share
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
      </Box>
    ),
    code: `<Button variant="outlined">Secondary</Button>
<Button variant="outlined" startIcon={<MaterialIcon icon="edit" />}>
  Edit
</Button>
<Button variant="outlined" endIcon={<MaterialIcon icon="share" />}>
  Share
</Button>
<Button variant="outlined" disabled>
  Disabled
</Button>`,
  },
  {
    title: 'Text Buttons',
    description: 'Used for subtle actions and navigation.',
    component: (
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
        <Button variant="text">Text</Button>
        <Button variant="text" startIcon={<MaterialIcon icon="favorite" />}>
          Like
        </Button>
        <Button variant="text" color="error" startIcon={<MaterialIcon icon="delete" />}>
          Delete
        </Button>
        <Button variant="text" disabled>
          Disabled
        </Button>
      </Box>
    ),
    code: `<Button variant="text">Text</Button>
<Button variant="text" startIcon={<MaterialIcon icon="favorite" />}>
  Like
</Button>
<Button variant="text" color="error" startIcon={<MaterialIcon icon="delete" />}>
  Delete
</Button>
<Button variant="text" disabled>
  Disabled
</Button>`,
  },
  {
    title: 'Button Sizes',
    description: 'Different sizes for various use cases.',
    component: (
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Box>
    ),
    code: `<Button variant="contained" size="small">
  Small
</Button>
<Button variant="contained" size="medium">
  Medium
</Button>
<Button variant="contained" size="large">
  Large
</Button>`,
  },
  {
    title: 'Icon Buttons',
    description: 'Compact buttons for actions with clear icons.',
    component: (
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap' }}>
        <IconButton>
          <MaterialIcon icon="favorite" />
        </IconButton>
        <IconButton color="primary">
          <MaterialIcon icon="share" />
        </IconButton>
        <IconButton color="error">
          <MaterialIcon icon="delete" />
        </IconButton>
        <IconButton disabled>
          <MaterialIcon icon="edit" />
        </IconButton>
      </Box>
    ),
    code: `<IconButton>
  <MaterialIcon icon="favorite" />
</IconButton>
<IconButton color="primary">
  <MaterialIcon icon="share" />
</IconButton>
<IconButton color="error">
  <MaterialIcon icon="delete" />
</IconButton>
<IconButton disabled>
  <MaterialIcon icon="edit" />
</IconButton>`,
  },
  {
    title: 'Floating Action Buttons',
    description: 'Prominent buttons for primary actions.',
    component: (
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
        <Fab color="primary">
          <MaterialIcon icon="add" />
        </Fab>
        <Fab color="secondary">
          <MaterialIcon icon="edit" />
        </Fab>
        <Fab variant="extended">
          <MaterialIcon icon="add" sx={{ mr: 1 }} />
          Create New
        </Fab>
        <Fab size="small">
          <MaterialIcon icon="add" />
        </Fab>
      </Box>
    ),
    code: `<Fab color="primary">
  <MaterialIcon icon="add" />
</Fab>
<Fab color="secondary">
  <MaterialIcon icon="edit" />
</Fab>
<Fab variant="extended">
  <MaterialIcon icon="add" sx={{ mr: 1 }} />
  Create New
</Fab>
<Fab size="small">
  <MaterialIcon icon="add" />
</Fab>`,
  },
  {
    title: 'Button Groups',
    description: 'Group related buttons together.',
    component: (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <ButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Box>
    ),
    code: `<ButtonGroup variant="contained">
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
<ButtonGroup variant="outlined">
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>`,
  },
];

export const Buttons: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Buttons
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
        Buttons enable users to take actions and make choices with a single tap or click. 
        They communicate what action will occur when the user touches them.
      </Typography>

      {buttonExamples.map((example, index) => (
        <ComponentPreview
          key={index}
          title={example.title}
          description={example.description}
          component={example.component}
          code={example.code}
        />
      ))}
    </Box>
  );
};