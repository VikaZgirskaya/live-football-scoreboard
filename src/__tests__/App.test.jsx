import React from "react";
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App title', () => {
  render(<App />);
  expect(screen.getByText(/Live Football World Cup Scoreboard/i)).toBeInTheDocument();
});
