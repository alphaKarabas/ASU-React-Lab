import React from "react";
import { Link } from "react-router-dom";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

function SideBar({ isOpen, toggleDrawer }) {
  return (
    <Drawer
      anchor={"left"}
      open={isOpen}
      onClose={toggleDrawer(false)}
    >
      <List>
        {/* Список ссылок */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/Lab_2">
            <ListItemText primary="Lab 2" />
          </ListItemButton>
        </ListItem>
        {/* Добавьте дополнительные ссылки по аналогии */}
      </List>
    </Drawer>
  );
}

export default SideBar;
