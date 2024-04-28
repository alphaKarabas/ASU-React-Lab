import React from 'react';
import Button from '@mui/material/Button';

const ButtonComponent = ({children, onPress, ...props}) => (
  <Button onClick={onPress} {...props}>{children}</Button>
);

export default ButtonComponent;
