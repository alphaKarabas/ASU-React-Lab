import React from 'react';
import Container from '@mui/material/Container';

const ContainerComponent = ({ children, ...props }) => (
  <Container style={{fontSize: 8}} {...props}>
    {children}
  </Container>
);

export default ContainerComponent;
