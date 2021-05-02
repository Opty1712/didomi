import { consentKeys, inputKeys } from './constants';
import { FormState } from './interface';

export const validate = (state: FormState) => {
  const isTextFieldsFilled = inputKeys.every((item) => state[item] !== '');
  const isCheckboxesFilled = consentKeys.some(
    (item) => state.consentGivenFor[item]
  );

  return isTextFieldsFilled && isCheckboxesFilled;
};
