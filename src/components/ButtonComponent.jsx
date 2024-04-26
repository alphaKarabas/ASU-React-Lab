import React from 'react';
import Button from '@mui/material/Button';

const ButtonComponent = ({children, ...props}) => (
  <Button {...props}>{children}</Button>
);

export default ButtonComponent;
