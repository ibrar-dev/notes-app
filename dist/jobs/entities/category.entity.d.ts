import { Job } from './jobs.entity';
export declare class JobCategory {
    id: string;
    title: string;
    order: number;
    jobs: Job[];
}
