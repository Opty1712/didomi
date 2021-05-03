import { getKeys } from '../utils';

/**
 * Initial text fields.
 *
 * All changes should be started at this point
 */
export const inputFields = {
  name: 'Name',
  email: 'Email'
};

/**
 * Typings of text fields
 */
export type InputFields = typeof inputFields;

/**
 * Initial checkbox fields.
 *
 * All changes should be started at this point
 */
export enum ConsentVariants {
  ReceiveNewsletters = 'Receive newsletters',
  BeShownTargetedAs = 'Be shown targeted as',
  ContributeToAnonymousVisitStatistics = 'Contribute to anonymous visit statistics'
}

/**
 * Consent, incoming from server
 */
export type ConsentServer = typeof inputFields & {
  id: number;
  consentGivenFor: ConsentVariants[];
};

/**
 * Consent, posting from client
 */
export type Consent = Omit<ConsentServer, 'id'>;

/**
 * Calculated type for creating object from enum `ConsentVariants`
 */
export type ConsentVariantsMap = Record<
  keyof typeof ConsentVariants,
  ConsentVariants
>;

/**
 * Calculated object for getting information at «O(1)» time
 * from enum `ConsentVariants`
 */
export const consentVariants = getKeys(
  ConsentVariants
).reduce<ConsentVariantsMap>((accumulator, current) => {
  accumulator[current] = ConsentVariants[current];

  return accumulator;
}, {} as ConsentVariantsMap);
