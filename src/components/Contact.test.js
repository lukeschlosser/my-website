import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('Check if LinkedIn link is correct', () => {
    render(<Contact />);
    const linkElement = screen.getByRole('link', { name: /linkedin\.com\/in\/lukeschlosser\//i });
    expect(linkElement).toHaveAttribute('href', 'https://www.linkedin.com/in/lukeschlosser/');
});

test('Check if email link is correct', () => {
    render(<Contact />);
    const linkElement = screen.getByRole('link', { name: /JonLukeSchlosser@gmail\.com/i });
    expect(linkElement).toHaveAttribute('href', 'mailto:JonLukeSchlosser@gmail.com');
});

test('Check if Download Resume link is correct', () => {
    render(<Contact />);
    const linkElement = screen.getByRole('link', { name: /Download Resume/i });
    expect(linkElement).toHaveAttribute('href', 'Jon_Luke_Schlosser_Resume.pdf');
    expect(linkElement).toHaveAttribute('download', '');
});

test('Check if View Resume link is correct', () => {
    render(<Contact />);
    const linkElement = screen.getByRole('link', { name: /View Resume/i });
    expect(linkElement).toHaveAttribute('href', 'Jon_Luke_Schlosser_Resume.pdf');
});

test('Check if LinkedInIcon is present', () => {
    render(<Contact />);
    const iconElement = screen.getByLabelText('LinkedIn');
    expect(iconElement).toBeInTheDocument();
});

test('Check if EmailIcon is present', () => {
    render(<Contact />);
    const iconElement = screen.getByLabelText('Email');
    expect(iconElement).toBeInTheDocument();
});

test('Check if GetAppIcon (Download Icon) is present', () => {
    render(<Contact />);
    const iconElement = screen.getByLabelText('Download');
    expect(iconElement).toBeInTheDocument();
});

test('Check if VisibilityIcon (View Icon) is present', () => {
    render(<Contact />);
    const iconElement = screen.getByLabelText('Visibility');
    expect(iconElement).toBeInTheDocument();
});
