// @ts-ignore
import {CardinalBeSamSdk, Credentials, type SamV2Api} from "@icure/cardinal-be-sam";

export const initialiseSdk = async () => {
    try {
        const sdk = await CardinalBeSamSdk.initialize(
            undefined,
            'https://api.icure.cloud',
            new Credentials.UsernamePassword(
                'larisa.shashuk+medicationsTest@gmail.com',
                '75b00167-a1e3-4825-b262-396617c71cab'
            )
        );
        const test = await sdk.sam.getSamVersion();
        console.log(test);
        return sdk.sam as SamV2Api;
    } catch (error) {
        console.error('Error initializing SDK:', error);
    }
};


export const searchMedications = async (sdk: SamV2Api, lang: string, query: string) => {
    try {
        return await sdk.findPaginatedAmpsByLabel(lang, query);
    } catch (error) {
        console.error('Error searching medications:', error);
    }
}
