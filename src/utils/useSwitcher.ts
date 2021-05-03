import { useCallback, useState } from 'react';

/**
 * Hook used for getting current state «true/false» and methods for setting it
 */
export const useSwitcher = (isDefaultSwitchedOn = false) => {
  const [isSwitchedOn, setIsSwitchedOn] = useState(isDefaultSwitchedOn);

  const switchOn = useCallback(() => setIsSwitchedOn(true), []);
  const switchOff = useCallback(() => setIsSwitchedOn(false), []);
  const toggleSwitcher = useCallback(() => setIsSwitchedOn((v) => !v), []);

  return { isSwitchedOn, setIsSwitchedOn, switchOn, switchOff, toggleSwitcher };
};
