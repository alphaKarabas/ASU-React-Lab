import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/UserSlice';
import { Button, Typography, Box } from '@mui/material';

function UserMenu() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.UserSlice.isAuth);
  const currentUser = useSelector((state) => state.UserSlice.currentUser);

  const handleLogout = () => {
    dispatch(logout());
  };

  if (!isAuth) {
    return null;
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2 }}>
      <Typography variant="body1">
        Привет, {currentUser.name}
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Выйти
      </Button>
    </Box>
  );
}

export default UserMenu;
