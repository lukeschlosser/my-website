import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders Projects component with correct elements', () => {
    render(<Projects />);
    
    for (let i = 0; i < 6; i++) { // Update when new projects are added
        const accordionElement = screen.getByLabelText(`Accordion ${i}`);
        expect(accordionElement).toBeInTheDocument();
    }
});
