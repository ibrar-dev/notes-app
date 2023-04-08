import { AppliedJob } from './applied-job.entity';
export declare class AppliedJobCategory {
    id: string;
    title: string;
    order: number;
    jobs: AppliedJob[];
}
