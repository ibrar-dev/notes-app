import { Resume } from './resume.entity';
export declare class Phone {
    id: string;
    phoneNumber: string;
    ISDCode: string;
    originalNumber: string;
    formattedNumber: string;
    type: string;
    confidenceScore: number;
    res: Resume;
}
