import { Resume } from './resume.entity';
export declare class Publication {
    id: string;
    publicationTitle: string;
    publisher: string;
    publicationNumber: string;
    publicationUrl: string;
    authors: string;
    description: string;
    res: Resume;
}
