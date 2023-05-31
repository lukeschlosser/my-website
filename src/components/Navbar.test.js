import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar with correct elements', () => {
    render(<Navbar />);

    const aboutButton = screen.getByLabelText('About');
    expect(aboutButton).toBeInTheDocument();

    const projectsButton = screen.getByLabelText('Projects');
    expect(projectsButton).toBeInTheDocument();

    const contactButton = screen.getByLabelText('Contact');
    expect(contactButton).toBeInTheDocument();
});