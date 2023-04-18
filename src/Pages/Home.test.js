import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/View the suggested crew lists/i);
  expect(linkElement).toBeInTheDocument();
});