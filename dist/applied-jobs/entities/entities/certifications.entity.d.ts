import { Resume } from './resume.entity';
export declare class Certification {
    id: string;
    title: string;
    authority: string;
    certificationCode: string;
    isExpiry: string;
    startDate: string;
    endDate: string;
    certificationUrl: string;
    res: Resume;
}
