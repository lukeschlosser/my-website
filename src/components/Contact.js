import React from 'react';
import { Link, Box, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GetAppIcon from '@mui/icons-material/GetApp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { styled } from '@mui/system';

const StyledBox = styled(Box)({
  backgroundColor: 'rgba(16, 16, 16, 0.5)',
  borderRadius: '10px',
  padding: '10px',
  width: 'fit-content',
  margin: 'auto',
});

const StyledIconContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '1px',
  marginBottom: '10px',
});

const StyledIcon = styled('span')({
  fontSize: '32px',
  color: '#b0b0b0',
  borderRadius: '50%',
  padding: '8px',
});

const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  textDecoration: 'none',
});

const StyledText = styled(Typography)({
  marginLeft: '10px',
});

const Contact = () => {
  return (
    <Box id="contact" minHeight="400px" padding="50px">
      <h1 style={{ textAlign: 'center', color: 'Black' }}>Contact</h1>
      <StyledBox>
        <StyledLink href="https://www.linkedin.com/in/lukeschlosser/" target="_blank" rel="noopener noreferrer">
          <StyledIconContainer>
            <StyledIcon>
              <LinkedInIcon />
            </StyledIcon>
            <StyledText>linkedin.com/in/lukeschlosser/</StyledText>
          </StyledIconContainer>
        </StyledLink>
        <StyledLink href="mailto:JonLukeSchlosser@gmail.com">
          <StyledIconContainer>
            <StyledIcon>
              <EmailIcon />
            </StyledIcon>
            <StyledText>JonLukeSchlosser@gmail.com</StyledText>
          </StyledIconContainer>
        </StyledLink>
        <StyledLink href="Jon_Luke_Schlosser_Resume.pdf" download>
          <StyledIconContainer>
            <StyledIcon>
              <GetAppIcon />
            </StyledIcon>
            <StyledText>Download Resume</StyledText>
          </StyledIconContainer>
        </StyledLink>
        <StyledLink href="Jon_Luke_Schlosser_Resume.pdf" target="_blank" rel="noopener noreferrer">
          <StyledIconContainer>
            <StyledIcon>
              <VisibilityIcon />
            </StyledIcon>
            <StyledText>View Resume</StyledText>
          </StyledIconContainer>
        </StyledLink>
      </StyledBox>
    </Box>
  );
};

export default Contact;
