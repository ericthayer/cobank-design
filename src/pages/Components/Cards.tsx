import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Avatar,
  IconButton,
  Chip,
} from '@mui/material';
import { ComponentPreview } from '../../components/ComponentPreview/ComponentPreview';
import { MaterialIcon } from '../../components/MaterialIcon/MaterialIcon';

const cardExamples = [
  {
    title: 'Basic Card',
    description: 'Simple card with content and actions.',
    component: (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a basic card with some content and actions below.
            Cards contain content and actions about a single subject.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
          <Button size="small">Share</Button>
        </CardActions>
      </Card>
    ),
    code: `<Card sx={{ maxWidth: 345 }}>
  <CardContent>
    <Typography variant="h5" component="div" gutterBottom>
      Card Title
    </Typography>
    <Typography variant="body2" color="text.secondary">
      This is a basic card with some content and actions below.
      Cards contain content and actions about a single subject.
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">Learn More</Button>
    <Button size="small">Share</Button>
  </CardActions>
</Card>`,
  },
  {
    title: 'Media Card',
    description: 'Card with media content and structured information.',
    component: (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.pexels.com/photos/1054656/pexels-photo-1054656.jpeg?auto=compress&cs=tinysrgb&w=400"
          title="Mountain landscape"
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Beautiful Landscape
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Explore the stunning mountain landscapes with crystal clear lakes
            and breathtaking views that will leave you speechless.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <MaterialIcon icon="favorite" />
          </IconButton>
          <IconButton aria-label="share">
            <MaterialIcon icon="share" />
          </IconButton>
        </CardActions>
      </Card>
    ),
    code: `<Card sx={{ maxWidth: 345 }}>
  <CardMedia
    sx={{ height: 140 }}
    image="https://images.pexels.com/photos/1054656/pexels-photo-1054656.jpeg"
    title="Mountain landscape"
  />
  <CardContent>
    <Typography variant="h5" component="div" gutterBottom>
      Beautiful Landscape
    </Typography>
    <Typography variant="body2" color="text.secondary">
      Explore the stunning mountain landscapes with crystal clear lakes
      and breathtaking views that will leave you speechless.
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    <IconButton aria-label="add to favorites">
      <MaterialIcon icon="favorite" />
    </IconButton>
    <IconButton aria-label="share">
      <MaterialIcon icon="share" />
    </IconButton>
  </CardActions>
</Card>`,
  },
  {
    title: 'Profile Card',
    description: 'Card designed for displaying user profiles.',
    component: (
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
              JD
            </Avatar>
            <Box>
              <Typography variant="h6" component="div">
                John Doe
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Senior Developer
              </Typography>
            </Box>
            <IconButton sx={{ ml: 'auto' }}>
              <MaterialIcon icon="more_vert" />
            </IconButton>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Passionate about creating beautiful and functional user interfaces.
            Loves working with React and modern web technologies.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Chip label="React" size="small" />
            <Chip label="TypeScript" size="small" />
            <Chip label="MUI" size="small" />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <MaterialIcon icon="location_on" fontSize="small" color="action" />
              <Typography variant="caption">San Francisco</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <MaterialIcon icon="event" fontSize="small" color="action" />
              <Typography variant="caption">Joined 2023</Typography>
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button size="small">View Profile</Button>
          <Button size="small">Connect</Button>
        </CardActions>
      </Card>
    ),
    code: `<Card sx={{ maxWidth: 345 }}>
  <CardContent>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Avatar sx={{ mr: 2, bgcolor: 'primary.main' }}>
        JD
      </Avatar>
      <Box>
        <Typography variant="h6" component="div">
          John Doe
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Senior Developer
        </Typography>
      </Box>
      <IconButton sx={{ ml: 'auto' }}>
        <MaterialIcon icon="more_vert" />
      </IconButton>
    </Box>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
      Passionate about creating beautiful and functional user interfaces.
      Loves working with React and modern web technologies.
    </Typography>
    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
      <Chip label="React" size="small" />
      <Chip label="TypeScript" size="small" />
      <Chip label="MUI" size="small" />
    </Box>
  </CardContent>
  <CardActions>
    <Button size="small">View Profile</Button>
    <Button size="small">Connect</Button>
  </CardActions>
</Card>`,
  },
];

export const Cards: React.FC = () => {
  return (
    <Box>
      <Typography variant="h3" component="h1" gutterBottom>
        Cards
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px' }}>
        Cards contain content and actions about a single subject. They serve as 
        an entry point to more detailed information and provide a consistent way 
        to display related information.
      </Typography>

      {cardExamples.map((example, index) => (
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