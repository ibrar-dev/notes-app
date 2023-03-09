import { Projects } from './projects.entity';
import { RelatedSkills } from './relatedSkills.entity';
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
    relatedSkills: RelatedSkills[];
    projects: Projects[];
    res: Resume;
}
