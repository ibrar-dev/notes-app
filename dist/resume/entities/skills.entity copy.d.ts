import { Resume } from './resume.entity';
export declare class Skills {
    id: string;
    type: string;
    skill: string;
    ontology: string;
    alias: string;
    formattedName: string;
    evidence: string;
    lastUsed: string;
    experienceInMonths: number;
    res: Resume;
}
