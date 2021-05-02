import { ConsentVariants, InputFields } from '../../store';
import { consentKeys, inputKeys } from './constants';
import { FormState } from './interface';

export const validate = (state: FormState) => {
  const isTextFieldsFilled = inputKeys.every((item) => state[item] !== '');
  const isCheckboxesFilled = consentKeys.some(
    (item) => state.consentGivenFor[item]
  );

  return isTextFieldsFilled && isCheckboxesFilled;
};

export const makeConsent = (state: FormState) => {
  const inputFields = inputKeys.reduce<InputFields>((accumulator, current) => {
    accumulator[current] = state[current];

    return accumulator;
  }, {} as InputFields);

  const consentGivenFor = consentKeys
    .filter((item) => state.consentGivenFor[item])
    .map((item) => ConsentVariants[item]);

  return {
    ...inputFields,
    consentGivenFor,
    id: Math.random()
  };
};
