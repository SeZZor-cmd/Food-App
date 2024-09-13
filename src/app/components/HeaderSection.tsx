// HeaderSection.tsx
"use client";
import { Box, Tab, Tabs, Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { SyntheticEvent, useState } from "react";


export default function HeaderSection() {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box>
     
      <Box
        sx={{
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          bgcolor: "background.paper",
          padding: "8px", 
        }}
      >
       
        <Box
          component="img"
          src="/images/BellaOlonjeLogo.png" 
          alt="Logo"
          sx={{ height: 70, paddingLeft:"30px" }} 
        />

        
        <Box
          sx={{
            display: { xs: "none", md: "flex" }, 
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs"
            TabIndicatorProps={{ style: { display: "none" } }} 
            
          >
            <Tab label="Home" sx={{textTransform:'none' , "&.Mui-selected": {color: "#FA4A0C"} ,
            "&:not(.Mui-selected)": {color: "#252B42"}}} />
            <Tab label="Product" sx={{textTransform:'none' , "&.Mui-selected": {color: "#FA4A0C"} ,
            "&:not(.Mui-selected)": {color: "#252B42"}}} />
            <Tab label="Faq" sx={{textTransform:'none' , "&.Mui-selected": {color: "#FA4A0C"} ,
            "&:not(.Mui-selected)": {color: "#252B42"}}}/>
            <Tab label="Contact" sx={{textTransform:'none' , "&.Mui-selected": {color: "#FA4A0C"} ,
            "&:not(.Mui-selected)": {color: "#252B42"}}}/>
          </Tabs>
        </Box>

        
        <IconButton
          sx={{ display: { xs: "flex", md: "none" } }} 
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Box>

      
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Product" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Faq" />
            </ListItemButton>
            <ListItemButton>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
