export enum ConsentVariants {
  ReceiveNewsletters = 'Receive newsletters',
  BeShownTargetedAs = 'Be shown targeted as',
  ContributeToAnonymousVisitStatistics = 'Contribute to anonymous visit statistics'
}

export const consentVariants: Record<
  keyof typeof ConsentVariants,
  ConsentVariants
> = {
  ReceiveNewsletters: ConsentVariants.ReceiveNewsletters,
  ContributeToAnonymousVisitStatistics:
    ConsentVariants.ContributeToAnonymousVisitStatistics,
  BeShownTargetedAs: ConsentVariants.BeShownTargetedAs
};

export const inputFields = {
  name: 'Name',
  email: 'Email'
};

export type InputFields = typeof inputFields;
