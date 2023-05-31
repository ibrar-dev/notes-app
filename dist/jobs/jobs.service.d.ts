import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './entities/jobs.entity';
import { JobsCategoryService } from './jobs-category.service';
export declare class JobService {
    private readonly jobsRepository;
    private readonly jobCategoryService;
    constructor(jobsRepository: Repository<Job>, jobCategoryService: JobsCategoryService);
    create(createTourDto: CreateJobDto): Promise<Job>;
    createFromCronJob(createTourDto: CreateJobDto): Promise<any>;
    findAll(query: any): Promise<any>;
    count(): Promise<any>;
    findOne(id: string): Promise<{
        success: boolean;
        result: Job;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        result?: undefined;
    }>;
    deleteByCategory(): Promise<{
        success: boolean;
        result: import("typeorm").DeleteResult;
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        result?: undefined;
    }>;
    getCategories(): Promise<any>;
    getTypes(): Promise<any>;
    getCompanies(query: any): Promise<any>;
    totalCompanies(): Promise<any>;
    getTopCompanies(): Promise<any>;
    getLatestJobs(): Promise<any>;
    getJobsCountByCategory(): Promise<any>;
}
