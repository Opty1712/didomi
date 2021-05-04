import { Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import React, { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { consentVariants, inputFields, InputFields } from '../../store';
import { consentKeys, inputKeys } from './constants';
import { ConsentFields, FormState } from './interface';
import { field } from './styled';

/** Hook for making arrays of fields for `Form` */
export const useGetFields = (
  state: FormState,
  setState: Dispatch<SetStateAction<FormState>>
) => {
  const getInputOnChangeHandler = useCallback(
    (fieldKey: keyof InputFields) => (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setState((value) => ({ ...value, [fieldKey]: event.target.value })),
    [setState]
  );

  const textFields = useMemo(
    () =>
      inputKeys.map((item) => (
        <TextField
          data-testid={item}
          key={item}
          label={inputFields[item]}
          required
          className={field}
          onChange={getInputOnChangeHandler(item)}
          value={state[item]}
        />
      )),
    [getInputOnChangeHandler, state]
  );

  const getCheckboxOnChangeHandler = useCallback(
    (fieldKey: keyof ConsentFields) => (
      event: React.MouseEvent<HTMLElement>
    ) => {
      const target = event.target;
      if (target instanceof HTMLInputElement) {
        setState((value) => ({
          ...value,
          consentGivenFor: {
            ...value.consentGivenFor,
            [fieldKey]: target.checked
          }
        }));
      }
    },
    [setState]
  );

  const checkboxFields = useMemo(
    () =>
      consentKeys.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              data-testid={item}
              onChange={() => void 0}
              name="checkedA"
              color="primary"
              onClick={getCheckboxOnChangeHandler(item)}
              checked={state.consentGivenFor[item]}
            />
          }
          label={consentVariants[item]}
        />
      )),
    [getCheckboxOnChangeHandler, state.consentGivenFor]
  );

  return { textFields, checkboxFields };
};
