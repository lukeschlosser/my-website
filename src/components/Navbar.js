import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AppBar, Toolbar, Button, Box, useMediaQuery, Menu, MenuItem, ListItemText, useTheme, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: 'About', link: 'home' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];

  return (
    <AppBar position="sticky" style={{ backgroundColor: 'lightgrey', opacity: '98%' }}>
      <Toolbar sx={{ minHeight: '50px' }}>
        {isMobile ? (
          <>
            <IconButton edge="start" color="dark" aria-label="menu" onClick={handleMenuToggle}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              anchorEl={null}
              open={menuOpen}
              onClose={closeMenu}
              PaperProps={{
                style: {
                  backgroundColor: 'lightgrey',
                },
              }}
            >
              {navLinks.map((item, index) => (
                <MenuItem key={index} onClick={closeMenu}>
                  <Link to={item.link} smooth={true} offset={-70}>
                    <ListItemText primary={item.name} />
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            {navLinks.map((item, index) => (
              <Link to={item.link} smooth={true} offset={-70} key={index}>
                <Button color="inherit" sx={{ mx: 5, color: 'black' }}>
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
