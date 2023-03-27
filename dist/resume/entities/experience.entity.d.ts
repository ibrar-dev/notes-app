import { Resume } from './resume.entity';
export declare class Experience {
    id: string;
    employerName: string;
    employerFormattedName: string;
    employerConfidenceScore: number;
    title: string;
    jobFormattedName: string;
    jobAlias: string;
    jobConfidenceScore: number;
    jobPeriod: string;
    formattedJobPeriod: string;
    startDate: string;
    endDate: string;
    isCurrentEmployer: string;
    jobDescription: string;
    projects: string;
    res: Resume;
}
