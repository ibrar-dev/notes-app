import { CreateAppliedJobCategoryDto } from './dto/create-applied-job-category.dto copy';
import { AppliedJobCategory } from './entities/category.entity';
import { Repository } from 'typeorm';
export declare class AppliedJobsCategoryService {
    private readonly appliedJobsService;
    constructor(appliedJobsService: Repository<AppliedJobCategory>);
    create(createAppliedJobDto: CreateAppliedJobCategoryDto): Promise<AppliedJobCategory>;
}
