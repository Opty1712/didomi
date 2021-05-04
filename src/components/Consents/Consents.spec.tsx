import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Consents } from './Consents';
import { consentTestId } from './ConsentsView';

describe(nameof(Consents), () => {
  render(
    <Provider store={store}>
      <Consents />
    </Provider>
  );

  const texts = screen.getByTestId(consentTestId);

  it('Simple render', () => {
    expect(texts.textContent).toBe('#NameEmail0-0 of 0');
  });
});
