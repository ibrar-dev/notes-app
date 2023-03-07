import { Repository } from 'typeorm';
import { CreateJobDto } from './dto/create-job.dto';
import { Job } from './entities/jobs.entity';
export declare class JobService {
    private readonly jobsRepository;
    constructor(jobsRepository: Repository<Job>);
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
    getCategories(): Promise<any>;
}
