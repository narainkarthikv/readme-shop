import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa'; // Using FontAwesome icon as per your original
import { Box } from '@mui/system'; // For layout styling

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo/Brand */}
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
          README SHOP
        </Typography>

        {/* Shopping Cart Icon */}
        <IconButton component={Link} to="/shop" color="inherit">
          <FaShoppingCart />
        </IconButton>

        {/* Optional Dropdown can go here */}
        {/* 
        <Box>
          <IconButton component={Link} to="/editUser" color="inherit">
            Edit Profile
          </IconButton>
          <IconButton component={Link} to="/logout" color="inherit">
            Logout
          </IconButton>
        </Box>
        */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
