import { consentVariants, InputFields } from '../../store';

export type ConsentFields = Record<keyof typeof consentVariants, boolean>;
export type FormState = InputFields & { consentGivenFor: ConsentFields };
