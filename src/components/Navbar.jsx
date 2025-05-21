import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';
import MenuIcon from '@mui/icons-material/Menu';
import CustomDrawer from './CustomDrawer';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => setDrawerOpen((open) => !open);

  // Only Home and Templates
  const drawerItems = [
    'Home',
    'Templates',
  ];
  const drawerIcons = [
    <HomeIcon />,
    <MenuBookIcon />,
  ];
  const drawerLinks = [
    '/',
    '/templates',
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}
        >
          README SHOP
        </Typography>
        <IconButton component={Link} to="/shop" color="inherit">
          <FaShoppingCart />
        </IconButton>
        <CustomDrawer
          open={drawerOpen}
          onClose={handleDrawerToggle}
          anchor="left"
          items={drawerItems}
          itemIcons={drawerIcons}
          itemLinks={drawerLinks}
          title="Navigation"
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
