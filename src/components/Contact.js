import React from 'react';
import { Link, Tooltip, Box } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GetAppIcon from '@mui/icons-material/GetApp';
import { styled } from '@mui/system';

const StyledIcon = styled('span')({
  fontSize: '32px',
  color: 'white',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.8)',
  borderRadius: '50%',
  padding: '8px',
});

const Contact = () => {
  return (
    <Box id="contact" minHeight="400px" padding="50px">
      <h1 style={{ textAlign: 'center' }}>Contact Me</h1> {/* Added textAlign property */}
      <Box display="flex" justifyContent="center" gap={2}>
        <Tooltip title="Find me on LinkedIn">
          <Link href="https://www.linkedin.com/in/lukeschlosser/" target="_blank" rel="noopener noreferrer">
            <StyledIcon>
              <LinkedInIcon />
            </StyledIcon>
          </Link>
        </Tooltip>
        <Tooltip title="Email me">
          <Link href="mailto:JonLukeSchlosser@gmail.com">
            <StyledIcon>
              <EmailIcon />
            </StyledIcon>
          </Link>
        </Tooltip>
        <Tooltip title="Download the latest copy of my Resume">
          <Link href="/path/to/resume.pdf" download>
            <StyledIcon>
              <GetAppIcon />
            </StyledIcon>
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Contact;
