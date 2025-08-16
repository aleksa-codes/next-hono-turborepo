import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

describe('Home Page', () => {
  it('should render the main heading', () => {
    render(<Home />);

    const headingElement = screen.getByRole('heading', {
      name: /Next.js \+ Hono Start/i,
      level: 1,
    });

    expect(headingElement).toBeInTheDocument();
  });
});
