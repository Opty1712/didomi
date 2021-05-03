import React, { memo } from 'react';
import { FormView } from './FormView';
import { useFormData } from './useFormData';

/**
 * Adding consent form
 */
export const Form = memo(() => {
  const {
    checkboxFields,
    textFields,
    hideNotification,
    isAdded,
    isButtonDisabled,
    isLoading,
    isNotificationVisible,
    onSend
  } = useFormData();

  return (
    <FormView
      checkboxFields={checkboxFields}
      textFields={textFields}
      hideNotification={hideNotification}
      isAdded={isAdded}
      isButtonDisabled={isButtonDisabled}
      isLoading={isLoading}
      isNotificationVisible={isNotificationVisible}
      onSend={onSend}
    />
  );
});
Form.displayName = nameof(Form);
