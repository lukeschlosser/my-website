import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders App without crashing', () => {
    render(<App />);
});

test('renders child components', () => {
    render(<App />);
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();

    const homeElement = screen.getByRole('main');
    expect(homeElement).toBeInTheDocument();

    const projectsElement = screen.getByRole('complementary', { name: /projects/i });
    expect(projectsElement).toBeInTheDocument();

    const contactElement = screen.getByRole('complementary', { name: /contact/i });
    expect(contactElement).toBeInTheDocument();

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
});