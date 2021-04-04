import React from 'react';
import {render, screen} from '@testing-library/react';
import Home from "./Home"

test('Checks if h1 exists', () => {
  render(<Home/>);
  const element = screen.getByRole('heading', {
    level: 1
  })
  expect(element).toBeInTheDocument();
});
