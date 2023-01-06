import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Create header', () => {
  it('Renders the elements', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const element = screen.getByRole('navigation');
    expect(element).toBeInTheDocument();
  });
});
