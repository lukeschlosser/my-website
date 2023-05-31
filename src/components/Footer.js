import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box 
            role="contentinfo" 
            component="footer" 
            sx={{ 
                mt: 'auto', 
                py: 2, 
                textAlign: 'center', 
                opacity: '50%' 
            }} 
            aria-label="footer"
        >
            <Typography variant="body2" color="white">
                Created by Luke Schlosser using React and AWS.
            </Typography>
        </Box>
    );
}

export default Footer;