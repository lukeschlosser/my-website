import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { AppBar, Toolbar, Button, Box, useMediaQuery, useTheme } from '@mui/material';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import HomeIcon from '@mui/icons-material/Home';
import AccountTree from '@mui/icons-material/AccountTree';
import ContactIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Navbar = () => {
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

const [speedDialOpen, setSpeedDialOpen] = useState(false);

const handleSpeedDialOpen = () => {
    setSpeedDialOpen(true);
};

const handleSpeedDialClose = () => {
    setSpeedDialOpen(false);
};

const navLinks = [
    { name: 'About', link: 'home', icon: <HomeIcon /> },
    { name: 'Projects', link: 'projects', icon: <AccountTree /> },
    { name: 'Contact', link: 'contact', icon: <ContactIcon /> },
];

return (
    <>
        {!isMobile && (
            <AppBar 
                position="sticky" 
                style={{ backgroundColor: 'lightgrey', opacity: '98%' }}
                role="navigation"
            >
                <Toolbar sx={{ minHeight: '50px' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    {navLinks.map((item, index) => (
                        <Link to={item.link} smooth={true} offset={-70} key={index}>
                            <Button color="inherit" sx={{ mx: 5, color: 'black' }} aria-label={item.name}>
                                {item.name}
                            </Button>
                        </Link>
                    ))}
                    </Box>
                </Toolbar>
            </AppBar>
        )}
        {isMobile && (
            <SpeedDial
                ariaLabel="SpeedDial menu"
                icon={speedDialOpen ? <MoreHorizIcon /> : <MenuIcon />}
                onClose={handleSpeedDialClose}
                onOpen={handleSpeedDialOpen}
                open={speedDialOpen}
                direction="down"
                sx={{
                    position: 'fixed',
                    right: 0,
                    top: 0,
                    margin: '1rem',
                    transition: 'transform .5s',
                }}
                FabProps={{
                    style: { transform: speedDialOpen ? 'rotate(90deg)' : 'rotate(0deg)' },
                    sx: {
                        bgcolor: 'black',
                        opacity: '80%',
                        '&:hover': {
                            bgcolor: 'black',
                            opacity: '80%',
                        },
                    },
                }}
            >
                {navLinks.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        aria-label={action.name}
                        onClick={handleSpeedDialClose}
                        icon={
                            <Link 
                                to={action.link} 
                                smooth={true} 
                                offset={-70} 
                                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                {action.icon}
                            </Link>
                        }
                    />
                ))}
            </SpeedDial>
        )}
    </>
);
};

export default Navbar;
