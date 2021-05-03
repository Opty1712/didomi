import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

/** Hook for getting redux dispatch */
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** Hook for getting selectors from redux */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
