import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with correct text', () => {
    render(<Footer />);
    const footerElement = screen.getByLabelText('footer');
    expect(footerElement).toBeInTheDocument();
    
    const footerText = screen.getByText(/Created by Luke Schlosser using React and AWS./i);
    expect(footerText).toBeInTheDocument();
});