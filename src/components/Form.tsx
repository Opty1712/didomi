import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography
} from '@material-ui/core';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { getKeys } from '../utils';
import { consentVariants, InputFields, inputFields } from './interface';
import { Title } from './Layout/Title';

type ConsentFields = Record<keyof typeof consentVariants, boolean>;
type FormState = InputFields & { consents: ConsentFields };

const consentKeys = getKeys(consentVariants);

const consentsInitialState: ConsentFields = consentKeys.reduce<ConsentFields>(
  (accumulator, current) => {
    accumulator[current] = false;

    return accumulator;
  },
  {} as ConsentFields
);

const inputKeys = getKeys(inputFields);
const inputFieldsInitialState = inputKeys.reduce<InputFields>(
  (accumulator, current) => {
    accumulator[current] = '';

    return accumulator;
  },
  {} as InputFields
);

export const Form = memo(() => {
  const [state, setState] = useState<FormState>({
    ...inputFieldsInitialState,
    consents: { ...consentsInitialState }
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const getInputOnChangeHandler = useCallback(
    (fieldKey: keyof InputFields) => (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setState((value) => ({ ...value, [fieldKey]: event.target.value })),
    []
  );

  const textFields = useMemo(
    () =>
      inputKeys.map((item) => (
        <TextField
          key={item}
          label={inputFields[item]}
          required
          className={field}
          onChange={getInputOnChangeHandler(item)}
        />
      )),
    [getInputOnChangeHandler]
  );

  const getCheckboxOnChangeHandler = useCallback(
    (fieldKey: keyof ConsentFields) => (
      event: React.MouseEvent<HTMLElement>
    ) => {
      const target = event.target;
      if (target instanceof HTMLInputElement) {
        setState((value) => ({
          ...value,
          consents: { ...value.consents, [fieldKey]: target.checked }
        }));
      }
    },
    []
  );

  const checkboxFields = useMemo(
    () =>
      consentKeys.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              onChange={() => void 0}
              name="checkedA"
              color="primary"
              onClick={getCheckboxOnChangeHandler(item)}
            />
          }
          label={consentVariants[item]}
        />
      )),
    [getCheckboxOnChangeHandler]
  );

  const validate = useCallback(() => {
    const isTextFieldsFilled = inputKeys.every((item) => state[item] !== '');
    const isCheckboxesFilled = consentKeys.some((item) => state.consents[item]);

    return isTextFieldsFilled && isCheckboxesFilled;
  }, [state]);

  useEffect(() => {
    if (validate()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [validate]);

  return (
    <>
      <Title>Give consent</Title>
      <Root noValidate autoComplete="off">
        {textFields}
        <Typography className={text}>I agree to *:</Typography>
        <FormGroup className={consents}>{checkboxFields}</FormGroup>
        <ButtonWrapper>
          <Button
            variant="contained"
            color="primary"
            disabled={isButtonDisabled}
          >
            Give consent
          </Button>
        </ButtonWrapper>
      </Root>
    </>
  );
});
Form.displayName = nameof(Form);

const Root = styled.form`
  padding-bottom: 20px;
  display: inline-block;
`;

const field = css`
  && {
    margin: 0 20px;
  }
`;

const text = css`
  padding: 20px 0 0 0;
  text-align: center;
  display: block;
`;

const consents = css`
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;

  & .PrivateSwitchBase-input-11 {
    display: none;
  }

  & .PrivateSwitchBase-root-1 {
    padding: 12px;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
