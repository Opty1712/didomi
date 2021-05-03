/**
 * Is client side or server. Used to prevent SSR issues
 */
export const isClientSide = typeof window !== 'undefined';
