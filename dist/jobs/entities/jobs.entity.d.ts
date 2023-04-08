import { JobCategory } from "./category.entity";
export declare class Job {
    id: string;
    title: string;
    companyName: string;
    location: string;
    via: string;
    description: string;
    thumbnail: string;
    applyLink: string;
    postedAt: string;
    scheduleType: string;
    applyLinkTitle: string;
    salary: string;
    workFromHome: boolean;
    responsibilities: string[];
    qualifications: string[];
    created_at: Date;
    updated_at: Date;
    category: string;
    job_category: JobCategory;
}
