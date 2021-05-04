import { act, fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { ConsentVariants, store } from '../../store';
import { sleep } from '../../utils';
import { Form } from './Form';
import { buttonTestId, formTestId, textSaved } from './FormView';

describe(nameof(Form), () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

  const texts = screen.getByTestId(formTestId);

  it('Simple render', () => {
    expect(texts.textContent).toBe(
      'Name *Email *I agree to *:Receive newslettersBe shown targeted asContribute to anonymous visit statisticsGive consent '
    );
  });

  it('Sends result', async () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const button = screen.getByTestId(buttonTestId);
    const inputs = screen.getAllByDisplayValue('');
    const BeShownTargetedAs = screen.getByTestId(
      nameof(ConsentVariants['BeShownTargetedAs'])
    );

    act(() => {
      fireEvent.change(inputs[0], { target: { value: 'a' } });
    });
    await sleep(500);
    act(() => {
      fireEvent.change(inputs[1], { target: { value: 'a' } });
    });
    await sleep(500);
    act(() => {
      fireEvent.click(BeShownTargetedAs);
    });

    await sleep(500);
    fireEvent.click(button);

    await sleep(2500);

    const notification = screen.getByText(textSaved);

    expect(notification).not.toBe(void 0);
  });
});
