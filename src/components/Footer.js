import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ mt: 'auto', py: 2, textAlign: 'center', opacity: '50%' }}>
      <Typography variant="body2" color="white">
        Created by Luke Schlosser using React and AWS.
      </Typography>
    </Box>
  );
}

export default Footer;
