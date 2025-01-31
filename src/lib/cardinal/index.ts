// @ts-ignore
import {
  type Amp,
  CardinalBeSamSdk,
  Credentials, Nmp,
  type PaginatedListIterator,
  type SamV2Api, VmpGroup
} from "@icure/cardinal-be-sam";

export const initialiseSdk = async () => {
  try {
    const sdk = await CardinalBeSamSdk.initialize(
      undefined,
      'https://nightly.icure.cloud', //'http://127.0.0.1:16043',
        new Credentials.UsernamePassword(
        'larisa.shashuk+medicationsTest@gmail.com',
        '75b00167-a1e3-4825-b262-396617c71cab'
      )
    );
    return sdk.sam as SamV2Api;
  } catch (error) {
    console.error('Error initializing SDK:', error);
  }
};

export const searchMedications: (sdk: SamV2Api, lang: string, query: string) => Promise<[PaginatedListIterator<Amp>,PaginatedListIterator<VmpGroup>, PaginatedListIterator<Nmp>]> = async (sdk: SamV2Api, lang: string, query: string) => {
  try {
    return Promise.all([
        sdk.findPaginatedAmpsByLabel(lang, query),
        sdk.findPaginatedVmpGroupsByLabel(lang, query),
        sdk.findPaginatedNmpsByLabel(lang, query)
        ])
  } catch (error) {
    console.error('Error searching medications:', error);
    throw error;
  }
}

export const getSamVersion = async (sdk: SamV2Api) => {
  try {
    return await sdk.getSamVersion()
  } catch (error) {
    console.error('Error getting Sam version:', error);
  }
}
