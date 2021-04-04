import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Checks if Navigation exists', () => {
  render(<App />);
  const linkElement = screen.queryByRole('navigation')
  expect(linkElement).toBeInTheDocument();
});
