import React from 'react';
import { renderConsentsCell } from './ConsentsView';

describe(nameof(renderConsentsCell), () => {
  it('Returns React.Fragment', () => {
    const result = renderConsentsCell({ value: '' });
    expect(result).toEqual(<React.Fragment />);
  });

  it('Returns value', () => {
    const result = renderConsentsCell({ value: ['a', 'b', 'c'] });
    expect(result).toStrictEqual(<div>a, b, c</div>);
  });
});
