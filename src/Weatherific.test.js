import React from 'react';
import { render } from '@testing-library/react';
import Weatherific from './Weatherific';

test('renders learn react link', () => {
  const { getByText } = render(<Weatherific />);
  const linkElement = getByText(/Weatherific/i);
  expect(linkElement).toBeInTheDocument();
});
