import { render, screen } from '@testing-library/react';
import React from 'react';
import { Layout, rootTestId } from './Layout';

describe(nameof(Layout), () => {
  render(<Layout />);

  const root = screen.getByTestId(rootTestId);

  it('Simple render', () => {
    expect(root.textContent).toBe(
      'ConsentsGive consentCollected consentsCopyright © Opty1712'
    );
  });
});
