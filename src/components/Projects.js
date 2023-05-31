import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Link, Tooltip } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';

const projects = [
    {
        title: 'Thrive API',
        description: 'Thrive (Work in Progress) is an ongoing project aimed at building an efficient HR API for managing employee performance reviews. This Project started as a way to familiarize myself with Elixir and Phoenix. The application encompasses various features such as goal setting, feedback collection, review scheduling, and reporting. Built using Elixir, Phoenix, and PostgreSQL, Thrive aims to streamline and enhance the performance tracking process within organizations.',
        link: 'https://github.com/lukeschlosser/Thrive---Performance-Tracking-API'
    },
    {
        title: 'Wear-ther Application',
        description: 'Developed as my first full-stack application after completing Tech Elevator, the Wear-ther Application utilizes Java, Spring Boot, and Vue.js. This weather-focused application allows users to retrieve accurate weather information and receive clothing recommendations from URBN based on the current weather conditions.',
        link: 'https://github.com/lukeschlosser/URBN-Project'
    },
    {
        title: 'Comic Collection Application',
        description: 'In collaboration with three of my classmates at Tech Elevator, as our Capstone Project we developed a comprehensive full stack application utilizing Java, PostgreSQL, and Vue.js. The project revolves around consuming the Marvel API, enabling users to curate their own comic book collections by adding or removing comics as desired.',
        link: 'https://github.com/lukeschlosser/Final-Project'
    },
    {
        title: 'TEnmo',
        description: 'Our second project at Tech Elevator involved developing a Java-based simple Venmo-like application. Users could create accounts and transfer money between other users.',
        link: 'https://github.com/lukeschlosser/Project2'
    },
    {
        title: 'Vending Machine Software',
        description: 'Our first project at Tech Elevator involved developing a Java-based application for a vending machine. This software enables customers to view available items, make purchases, and provides the vending machine owner with sales tracking and reporting capabilities accessible through a hidden menu.',
        link: 'https://github.com/lukeschlosser/Project1'
    },
    {
        title: 'Portfolio Website',
        description: "The source code for this very website that you're currently viewing. Built with React and utilizing AWS services such as Amplify and Route 53, my goal was to craft an online space that encapsulates who I am and what I do. This platform serves not only as a showcase of the projects I've been diligently working on, but also as an accessible avenue for contacting me, and a hub where you can view or download my resume at your convenience.",
        link: 'https://github.com/lukeschlosser/my-website-main'
    },
    // Add more projects here...
];

const GitHubLink = ({ link }) => (
    <Box display="flex" alignItems="center" gap={1}>
      <GitHubIcon />
      <Typography variant="body2" style={{paddingTop: '3px'}}>Explore on GitHub</Typography>
    </Box>
  );

const Projects = () => {
    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div id="projects" style={{ position: 'relative', minHeight: '500px', padding: '50px'}}>
            <video 
                autoPlay
                loop
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '-1'
                }}
                poster="/fallbackImage.jpg"    
            >
                <source src="/projectsVideoAsset.mp4" type="video/mp4" />
            </video>
            <h1 style={{ color: 'white' }}>Projects</h1>
            {projects.map((project, index) => (
                <Accordion key={index} sx={{ opacity: 0.9, backgroundColor: 'lightgrey' }} expanded={expanded === index} onChange={handleChange(index)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant='h6' fontWeight="bold">{project.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box display="flex" flexDirection="column" gap={1}>
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                                <GitHubLink link={project.link} />
                            </Link>
                            <Typography>{project.description}</Typography>
                        </Box>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    )
}

export default Projects;
