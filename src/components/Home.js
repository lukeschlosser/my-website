import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
    const matches = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const matches900 = useMediaQuery('(max-width:900px)');

    const imageSize = matches ? '250px' : '350px';
    const imageStyle = { 
        width: 'auto', 
        height: 'auto', 
        maxWidth: imageSize, 
        minWidth: '100px',
        maxHeight: imageSize
    };

    return (
        <Box 
            role="main" 
            id="home" 
            aria-label="home" 
            style={{ 
                minHeight: '700px', 
                paddingTop: matches ? '27px' : '50px', 
                paddingRight: '50px', 
                paddingBottom: '50px', 
                paddingLeft: '50px' 
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <Box sx={{ paddingRight: matches ? '0px' : '20px' }}>
                    <Typography 
                        variant={matches ? "h3" : "h1"} 
                        style={{ fontSize: 'clamp(1.9rem, 5vw, 9rem)' }} 
                        aria-label="header"
                    >
                        J. Luke Schlosser
                    </Typography>
                    <Typography 
                        variant="h5" 
                        sx={{ 
                            opacity: 0.6, 
                            fontSize: 'clamp(0.9rem, 2.2vw, 4rem)' 
                        }} 
                        aria-label="subheader"
                    >
                        - Software & Solutions Enthusiast
                    </Typography>
                </Box>
                <Box
                    sx={{
                        border: '2px solid darkgrey',
                        backgroundColor: 'rgba(211, 211, 211, 0.6)',
                        padding: '10px',
                        borderRadius: '5px',
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: matches900 ? 'column-reverse' : 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                    aria-label="content-box"
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }} aria-label="content-text-box">
                        <Typography variant="body1">
                            *In my best Obi-Wan voice* Hello there! I'm Luke, I'm Luke, a tech enthusiast with an ever-expanding toolbox of skills and a knack for bridging the gap between tech and people. My favorites? Python, JavaScript, React, SQL, and AWS. I'm not just a Tech Elevator graduate and an AWS Certified Cloud Practitioner, but also a seasoned professional in medical sales.
                        </Typography>
                        <Typography variant="body1" sx={{paddingTop: '15px'}}>
                            This unique blend of tech savvy and customer-facing experience has given me a well-rounded perspective. I excel in translating intricate backend code into intuitive, user-friendly solutions. The creative liberty of frontend equally captivates me. Nothing beats that "Aha" moment when coding or the appreciation of a satisfied end user.
                        </Typography>
                        <Typography variant="body1" sx={{paddingTop: '15px'}}>
                            Outside of work, I fully embrace my roles as a husband and dada, and love getting creative in the kitchen. I also enjoy diving into the next engrossing video or board game, and I continually engage with the ever-evolving world of technological advancements.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginLeft: matches ? '0px' : '20px',
                            marginTop: matches ? '20px' : '0px',
                            marginBottom: matches ? '20px' : '0px',
                            opacity: 1 // Remove opacity from the image
                        }}
                        aria-label="image-box"
                    >
                        <img src="/myImage.jpg" alt="Luke Schlosser" style={imageStyle} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
