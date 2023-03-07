import { JobService } from './jobs.service';
import { Response } from 'express';
export declare class JobController {
    private readonly jobService;
    constructor(jobService: JobService);
    findAll(res: Response, page: number, limit: number, category?: string, company?: string): Promise<any>;
    getJobTitles(res: Response): Promise<any>;
    count(res: Response): Promise<any>;
    findOne(res: Response, id: string): Promise<void>;
}
