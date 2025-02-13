import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";
import "../index.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  // Menu items
  const menuItems = [
    { text: "Dashboard", path: "/dashboard" },
    { text: "Tasks", path: "/tasks" },
    { text: "Inquiries", path: "/inquiries" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "white", color: "navy", zIndex: 999 }}
      >
        <Toolbar>
          {/* Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img
              src="/Images/niceteclogotranparent.png"
              alt="Logo"
              height="70px"
            />
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color="inherit"
                sx={{ fontWeight: "600" }}
                onClick={() => navigate(item.path)}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* Menu Icon for Mobile */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            color="inherit"
            onClick={() => setOpenDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <div style={{ overflow: "hidden", width: "100vw" }}>
          <motion.div
            initial={{ x: "-50%" }} // Start off-screen
            animate={{ x: "0" }} // Move to the center
            exit={{ x: "-50%" }} // Move back off-screen
            transition={{ duration: 0.5 }}
          >
            <List>
              {menuItems.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(item.path);
                      setOpenDrawer(false);
                    }}
                  >
                    <ListItemText
                      primary={item.text}
                      primaryTypographyProps={{
                        fontWeight: "bold",
                        color: "navy",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </motion.div>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
