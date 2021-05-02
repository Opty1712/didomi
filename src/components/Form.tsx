import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Snackbar,
  TextField,
  Typography
} from '@material-ui/core';
import { Alert } from '@material-ui/lab/';
import { css } from 'linaria';
import { styled } from 'linaria/react';
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { usePostConsent } from '../mocks';
import {
  ConsentVariants,
  consentVariants,
  InputFields,
  inputFields
} from '../store';
import { getKeys } from '../utils';
import { Title } from './Title';

export const Form = memo(() => {
  const { postConsent } = usePostConsent();

  const [state, setState] = useState<FormState>({
    ...initialState
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
              checked={state.consentGivenFor[item]}
            />
          }
          label={consentVariants[item]}
        />
      )),
    [getCheckboxOnChangeHandler, state.consentGivenFor]
  );

  const validate = useCallback(() => {
    const isTextFieldsFilled = inputKeys.every((item) => state[item] !== '');
    const isCheckboxesFilled = consentKeys.some(
      (item) => state.consentGivenFor[item]
    );

    return isTextFieldsFilled && isCheckboxesFilled;
  }, [state]);

  useEffect(() => {
    if (validate()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [validate]);

  const resetForm = useCallback(() => {
    setState({ ...initialState });
    setIsButtonDisabled(true);
  }, []);

  const onSend = useCallback(async () => {
    setIsButtonDisabled(true);
    setIsLoading(true);

    const inputFields = inputKeys.reduce<InputFields>(
      (accumulator, current) => {
        accumulator[current] = state[current];

        return accumulator;
      },
      {} as InputFields
    );

    const consentGivenFor = consentKeys
      .filter((item) => state.consentGivenFor[item])
      .map((item) => ConsentVariants[item]);

    const result = await postConsent({
      ...inputFields,
      consentGivenFor,
      id: Math.random()
    });

    setIsAdded(Boolean(result));
    setIsNotificationVisible(true);
    setIsLoading(false);

    if (result) {
      resetForm();
    } else {
      setIsButtonDisabled(false);
    }
  }, [postConsent, resetForm, state]);

  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isAdded, setIsAdded] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const hideNotification = useCallback(
    () => setIsNotificationVisible(false),
    []
  );

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
            onClick={onSend}
          >
            Give consent {isLoading && <CircularProgress size={14} />}
          </Button>
        </ButtonWrapper>
      </Root>

      {isNotificationVisible && (
        <Snackbar
          open={true}
          autoHideDuration={3000}
          onClose={hideNotification}
        >
          <Alert
            elevation={6}
            variant="filled"
            onClose={hideNotification}
            severity={isAdded ? 'success' : 'error'}
          >
            {isAdded
              ? 'Your consent has been saved'
              : 'Your consent has not been saved'}
          </Alert>
        </Snackbar>
      )}
    </>
  );
});
Form.displayName = nameof(Form);

type ConsentFields = Record<keyof typeof consentVariants, boolean>;
type FormState = InputFields & { consentGivenFor: ConsentFields };

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

const initialState: FormState = {
  ...inputFieldsInitialState,
  consentGivenFor: { ...consentsInitialState }
};

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
