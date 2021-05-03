import { InputFields } from '../../store';
import { ConsentVariantsMap } from '../../store/interface';

/** Object for storing changes in checkboxes */
export type ConsentFields = Record<keyof ConsentVariantsMap, boolean>;

/** State of form, keeps all of the changes on page */
export type FormState = InputFields & { consentGivenFor: ConsentFields };
