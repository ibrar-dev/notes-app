import { JobService } from './jobs.service';
import { Response } from 'express';
export declare class JobController {
    private readonly jobService;
    constructor(jobService: JobService);
    findAll(res: Response, page: number, limit: number, category?: string, company?: string, time?: string): Promise<any>;
    getJobTitles(res: Response): Promise<any>;
    getJobCountByCategory(res: Response): Promise<any>;
    getLatestJobs(res: Response): Promise<any>;
    getCompanies(res: Response, page: number, limit: number): Promise<any>;
    totalCompanies(res: Response): Promise<any>;
    getTopCompanies(res: Response): Promise<any>;
    count(res: Response): Promise<any>;
    findOne(res: Response, id: string): Promise<void>;
    deleteByCategory(res: Response): Promise<{
        success: boolean;
        result: import("typeorm").DeleteResult;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        result?: undefined;
    }>;
}
