import { consentVariants, InputFields, inputFields } from '../../store';
import { getKeys } from '../../utils';
import { ConsentFields, FormState } from './interface';

/** Calculated list of all keys of consent checkboxes */
export const consentKeys = getKeys(consentVariants);

/** Calculated object for storing  changes of consent checkboxes */
const consentsInitialState: ConsentFields = consentKeys.reduce<ConsentFields>(
  (accumulator, current) => {
    accumulator[current] = false;

    return accumulator;
  },
  {} as ConsentFields
);

/** Calculated list of all keys of user text fields */
export const inputKeys = getKeys(inputFields);

/** Calculated object for storing  changes of user text fields */
const inputFieldsInitialState = inputKeys.reduce<InputFields>(
  (accumulator, current) => {
    accumulator[current] = '';

    return accumulator;
  },
  {} as InputFields
);

/** Initial object for storing changes of `Give consent` form */
export const initialState: FormState = {
  ...inputFieldsInitialState,
  consentGivenFor: { ...consentsInitialState }
};
