import {
  Button,
  CircularProgress,
  FormGroup,
  Snackbar,
  Typography
} from '@material-ui/core';
import { Alert } from '@material-ui/lab/';
import React, { memo, ReactNode } from 'react';
import { Title } from '../Title';
import { ButtonWrapper, consents, Root, text } from './styled';

/** FormView props */
type FormViewProps = {
  textFields: ReactNode[];
  checkboxFields: ReactNode[];
  isButtonDisabled: boolean;
  onSend: () => Promise<void>;
  isLoading: boolean;
  isNotificationVisible: boolean;
  hideNotification: () => void;
  isAdded: boolean;
};

/**
 * Adding consent form
 */
export const FormView = memo<FormViewProps>(
  ({
    checkboxFields,
    textFields,
    hideNotification,
    isAdded,
    isButtonDisabled,
    isLoading,
    isNotificationVisible,
    onSend
  }) => {
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
  }
);
FormView.displayName = nameof(FormView);
