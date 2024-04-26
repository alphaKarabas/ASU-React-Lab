import React from 'react';
import { Container, Typography } from '@mui/material';

const LabTitle = ({ title }) => {
  return (
    <Container>
      <Typography variant="h4" component="h1" sx={{ width: '100%', textAlign: 'center', marginY: 4 }}>
        {title}
      </Typography>
    </Container>
  );
};

export default LabTitle;