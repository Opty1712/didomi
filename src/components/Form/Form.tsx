import {
  Button,
  CircularProgress,
  FormGroup,
  Snackbar,
  Typography
} from '@material-ui/core';
import { Alert } from '@material-ui/lab/';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { usePostConsent } from '../../mocks';
import { ConsentVariants, InputFields } from '../../store';
import { Title } from '../Title';
import { consentKeys, initialState, inputKeys } from './constants';
import { validate } from './helpers';
import { FormState } from './interface';
import { ButtonWrapper, consents, Root, text } from './styled';
import { useGetFields } from './useGetFields';

export const Form = memo(() => {
  const { postConsent } = usePostConsent();

  const [state, setState] = useState<FormState>({
    ...initialState
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isAdded, setIsAdded] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { checkboxFields, textFields } = useGetFields(state, setState);

  useEffect(() => {
    if (validate(state)) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [state]);

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
