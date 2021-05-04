import { ConsentVariants } from '../../store';
import { initialState } from './constants';
import { makeConsent, validate } from './helpers';

describe(nameof(makeConsent), () => {
  it('Make consent', () => {
    expect(
      makeConsent({
        ...initialState,
        consentGivenFor: {
          ...initialState.consentGivenFor,
          BeShownTargetedAs: true
        }
      })
    ).toEqual({
      email: '',
      name: '',
      consentGivenFor: [ConsentVariants.BeShownTargetedAs]
    });
  });
});

describe(nameof(validate), () => {
  it('Returns false', () => {
    expect(validate(initialState)).toEqual(false);
    expect(validate({ ...initialState, email: 'a' })).toEqual(false);

    expect(validate({ ...initialState, name: 'a' })).toEqual(false);

    expect(validate({ ...initialState, email: 'a', name: 'a' })).toEqual(false);

    expect(
      validate({
        ...initialState,
        consentGivenFor: {
          ...initialState.consentGivenFor,
          BeShownTargetedAs: true
        }
      })
    ).toEqual(false);
  });

  it('Returns true', () => {
    expect(
      validate({
        ...initialState,
        email: 'a',
        name: 'a',
        consentGivenFor: {
          ...initialState.consentGivenFor,
          BeShownTargetedAs: true
        }
      })
    ).toEqual(true);
  });
});
