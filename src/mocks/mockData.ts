import { ConsentServer, ConsentVariants } from '../store';

/** Initial mocks of consents data */
export const mockData: ConsentServer[] = [
  {
    id: Math.random(),
    name: 'Joseph Ivanovich',
    email: 'joseph@mail.com',
    consentGivenFor: [
      ConsentVariants.BeShownTargetedAs,
      ConsentVariants.ContributeToAnonymousVisitStatistics,
      ConsentVariants.ReceiveNewsletters
    ]
  },
  {
    id: Math.random(),
    name: 'Will not tell',
    email: 'no@no.no',
    consentGivenFor: [ConsentVariants.ContributeToAnonymousVisitStatistics]
  },
  {
    id: Math.random(),
    name: 'Anonymous',
    email: 'mymail@hotmail.com',
    consentGivenFor: [
      ConsentVariants.ContributeToAnonymousVisitStatistics,
      ConsentVariants.ReceiveNewsletters
    ]
  }
];
