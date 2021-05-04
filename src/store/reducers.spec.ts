import { mockData } from '../mocks';
import { ConsentVariants } from './interface';
import {
  addConsent,
  addInitialMockData,
  consentSliceReducer
} from './reducers';

describe(nameof(consentSliceReducer), () => {
  it(nameof(addConsent), async () => {
    const result = consentSliceReducer(
      { value: [] },
      addConsent({
        name: 'q',
        email: 'q',
        id: 1,
        consentGivenFor: [ConsentVariants.BeShownTargetedAs]
      })
    );

    expect(result).toEqual({
      value: [
        {
          consentGivenFor: ['Be shown targeted as'],
          email: 'q',
          id: 1,
          name: 'q'
        }
      ]
    });
  });

  it(nameof(addInitialMockData), async () => {
    const result = consentSliceReducer(
      { value: [] },
      addInitialMockData(mockData)
    );

    expect(result).toEqual({
      value: mockData
    });
  });
});
