import React from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Toolbar, Typography, IconButton } from "@mui/material";

function SideBar({ isOpen, toggleDrawer }) {
  return (
    <Drawer
      anchor={"left"}
      open={isOpen}
      onClose={toggleDrawer(false)}
      sx={{
        width: 250,
        '& .MuiDrawer-paper': { width: 250, boxSizing: 'border-box' }
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            onClick={toggleDrawer(false)}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            React labs
          </Link>
        </Typography>
      </Toolbar>
      <List>
        {['Lab 2', 'Lab 4'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={toggleDrawer(false)}>
            <ListItemButton component={Link} to={`/${text.replace(' ', '_')}`}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SideBar;
