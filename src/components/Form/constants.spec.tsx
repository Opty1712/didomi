import { consentKeys, initialState, inputKeys } from './constants';

describe(nameof(consentKeys), () => {
  it('Get value', () => {
    expect(consentKeys).toEqual([
      'ReceiveNewsletters',
      'BeShownTargetedAs',
      'ContributeToAnonymousVisitStatistics'
    ]);
  });
});

describe(nameof(initialState), () => {
  it('Get value', () => {
    expect(initialState).toEqual({
      consentGivenFor: {
        BeShownTargetedAs: false,
        ContributeToAnonymousVisitStatistics: false,
        ReceiveNewsletters: false
      },
      email: '',
      name: ''
    });
  });
});

describe(nameof(inputKeys), () => {
  it('Get value', () => {
    expect(inputKeys).toEqual(['name', 'email']);
  });
});
