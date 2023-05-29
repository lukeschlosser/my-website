import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
    const matches = useMediaQuery(theme => theme.breakpoints.down('sm'));
    const matches900 = useMediaQuery('(max-width:900px)');

    const imageSize = matches ? '250px' : '350px'; // Change as needed
    const imageStyle = { 
        width: 'auto', 
        height: 'auto', 
        maxWidth: imageSize, 
        minWidth: '100px', // Change as needed
        maxHeight: imageSize
    };

    return (
        <div id="home" style={{ minHeight: '700px', padding: '50px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                <Box sx={{ paddingRight: matches ? '0px' : '20px' }}>
                    <Typography variant={matches ? "h3" : "h1"} style={{ fontSize: 'clamp(1.9rem, 5vw, 9rem)' }}>J. Luke Schlosser</Typography>
                    <Typography variant="h5" sx={{ opacity: 0.6, fontSize: 'clamp(0.9rem, 2.2vw, 4rem)' }}>- Software Engineer</Typography>

                </Box>
                <Box
                    sx={{
                        border: '2px solid darkgrey',
                        backgroundColor: 'rgba(211, 211, 211, 0.6)', // Updated background color with opacity
                        padding: '10px',
                        borderRadius: '5px',
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: matches900 ? 'column-reverse' : 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="body1">
                            *In my best Obi-Wan voice* Hello there! I'm Luke, a Software Engineer with a growing toolbox – favorites being Python, Javascript, React, SQL and AWS. I delight in creating code that's not just useful, but also fun to use. I'm a graduate of Tech Elevator and I have my AWS Certified Cloud Practitioner badge. I thrive on unraveling the complexities of backend code and equally enjoy the artistic license that frontend development offers. For me, the best part is when tech and imagination cross paths. Nothing beats that "Aha" moment!
                        </Typography>
                        <Typography variant="body1" sx={{paddingTop: '15px'}}>
                            I love being a dada and husband, getting creative in the kitchen, keeping fit, diving into cool board or video games, and staying up-to-date with the latest advancements in technology.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginLeft: matches ? '0px' : '20px',
                            marginTop: matches ? '20px' : '0px',
                            marginBottom: matches ? '20px' : '0px',
                            opacity: 1 // Remove opacity from the image
                        }}
                    >
                        <img src="/myImage.jpg" alt="Luke Schlosser" style={imageStyle} />
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Home;
