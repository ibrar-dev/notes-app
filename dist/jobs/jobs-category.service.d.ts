import { CreateAppliedJobCategoryDto } from './dto/create-applied-job-category.dto copy';
import { JobCategory } from './entities/category.entity';
import { Repository } from 'typeorm';
export declare class JobsCategoryService {
    private readonly jobsService;
    constructor(jobsService: Repository<JobCategory>);
    create(createAppliedJobDto: CreateAppliedJobCategoryDto): Promise<JobCategory>;
    find(): Promise<{
        success: boolean;
        result: JobCategory[];
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        result?: undefined;
    }>;
    getCountSubQuery(sabQuery: any): Promise<{
        success: boolean;
        result: JobCategory[];
        error?: undefined;
    } | {
        success: boolean;
        error: any;
        result?: undefined;
    }>;
}
