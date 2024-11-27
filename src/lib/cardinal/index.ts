// @ts-ignore
import {CardinalBeSamSdk, Credentials} from "@icure/cardinal-be-sam";

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
        return sdk;
    } catch (error) {
        console.error('Error initializing SDK:', error);
    }
};
