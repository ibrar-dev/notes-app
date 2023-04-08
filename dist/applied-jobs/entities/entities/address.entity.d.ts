import { Resume } from './resume.entity';
export declare class Address {
    id: string;
    street: string;
    city: string;
    state: string;
    stateIsoCode: string;
    country: string;
    zipCode: string;
    formattedAddress: string;
    type: string;
    isoAlpha2: string;
    isoAlpha3: string;
    uNCode: string;
    confidenceScore: number;
    res: Resume;
}
