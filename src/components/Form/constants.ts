import { consentVariants, InputFields, inputFields } from '../../store';
import { getKeys } from '../../utils';
import { ConsentFields, FormState } from './interface';

export const consentKeys = getKeys(consentVariants);

const consentsInitialState: ConsentFields = consentKeys.reduce<ConsentFields>(
  (accumulator, current) => {
    accumulator[current] = false;

    return accumulator;
  },
  {} as ConsentFields
);

export const inputKeys = getKeys(inputFields);
const inputFieldsInitialState = inputKeys.reduce<InputFields>(
  (accumulator, current) => {
    accumulator[current] = '';

    return accumulator;
  },
  {} as InputFields
);

export const initialState: FormState = {
  ...inputFieldsInitialState,
  consentGivenFor: { ...consentsInitialState }
};
