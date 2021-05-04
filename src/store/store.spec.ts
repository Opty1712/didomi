import { store } from './store';

describe(nameof(store), () => {
  it('Initial store', async () => {
    expect(store.getState()).toEqual({ consents: { value: [] } });
  });
});
