import { Resume } from './resume.entity';
export declare class Achievement {
    id: string;
    awardTitle: string;
    issuer: string;
    associatedWith: string;
    issuingDate: string;
    description: string;
    res: Resume;
}
