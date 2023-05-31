import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCssBaseline: {
        styleOverrides: {
            body: {
            backgroundImage: `url('backgroundImage.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            },
        },
        },
    },
    typography: {
        fontFamily: '"Nunito", sans-serif',
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Home />
        <Projects />
        <Contact />
        <Footer />
        </ThemeProvider>
    );
}

export default App;
