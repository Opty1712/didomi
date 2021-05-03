import { useCallback, useEffect, useState } from 'react';
import { usePostConsent } from '../../mocks';
import { initialState } from './constants';
import { makeConsent, validate } from './helpers';
import { FormState } from './interface';
import { useGetFields } from './useGetFields';

/**
 * Hook for getting data to render `Form`
 */
export const useFormData = () => {
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
    setIsButtonDisabled(!validate(state));
  }, [state]);

  const resetForm = useCallback(() => {
    setState(initialState);
    setIsButtonDisabled(true);
  }, []);

  const onSend = useCallback(async () => {
    setIsButtonDisabled(true);
    setIsLoading(true);

    const result = await postConsent(makeConsent(state));

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

  return {
    checkboxFields,
    textFields,
    hideNotification,
    isAdded,
    isButtonDisabled,
    isLoading,
    isNotificationVisible,
    onSend
  };
};
