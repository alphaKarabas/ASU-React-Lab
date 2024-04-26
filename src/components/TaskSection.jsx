import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TaskSection = ({ title, children, bgColor = 'background.paper', color = 'text.primary' }) => {
  return (
    <Box sx={{ bgcolor: bgColor, color: color }}>
      <Container>
        <Typography variant="h5" component="h2" gutterBottom sx={{ textAlign: 'center' }}>
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

export default TaskSection;
