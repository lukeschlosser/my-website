import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

jest.mock('@mui/material/useMediaQuery', () => () => true);

test('renders home component with correct elements', () => {
    render(<Home />);

    const homeElement = screen.getByLabelText('home');
    expect(homeElement).toBeInTheDocument();

    const headerElement = screen.getByLabelText('header');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe('J. Luke Schlosser');

    const subheaderElement = screen.getByLabelText('subheader');
    expect(subheaderElement).toBeInTheDocument();
    expect(subheaderElement.textContent).toBe('- Software Engineer');

    const contentBoxElement = screen.getByLabelText('content-box');
    expect(contentBoxElement).toBeInTheDocument();

    const contentTextBoxElement = screen.getByLabelText('content-text-box');
    expect(contentTextBoxElement).toBeInTheDocument();

    const imageBoxElement = screen.getByLabelText('image-box');
    expect(imageBoxElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('Luke Schlosser');
    expect(imageElement).toBeInTheDocument();
});