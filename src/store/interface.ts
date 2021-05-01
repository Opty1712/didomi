import { getKeys } from '../utils';

/**
 * Init input fields here
 */
export const inputFields = {
  name: 'Name',
  email: 'Email'
};

export type InputFields = typeof inputFields;

/**
 * Init checkbox fields here
 */
export enum ConsentVariants {
  ReceiveNewsletters = 'Receive newsletters',
  BeShownTargetedAs = 'Be shown targeted as',
  ContributeToAnonymousVisitStatistics = 'Contribute to anonymous visit statistics'
}

export type Consent = typeof inputFields & {
  id: number;
  consentGivenFor: ConsentVariants[];
};

type ConsentVariantsMap = Record<keyof typeof ConsentVariants, ConsentVariants>;

export const consentVariants = getKeys(
  ConsentVariants
).reduce<ConsentVariantsMap>((accumulator, current) => {
  accumulator[current] = ConsentVariants[current];

  return accumulator;
}, {} as ConsentVariantsMap);
