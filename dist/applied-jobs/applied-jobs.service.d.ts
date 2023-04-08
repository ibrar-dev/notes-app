import { CreateAppliedJobDto } from './dto/create-applied-job.dto';
import { UpdateAppliedJobDto } from './dto/update-applied-job.dto';
import { AppliedJob } from './entities/applied-job.entity';
import { AppliedJobsCategoryService } from './applied-jobs-categories.service';
import { Repository } from 'typeorm';
export declare class AppliedJobsService {
    private readonly appliedJobsService;
    private readonly categoryService;
    constructor(appliedJobsService: Repository<AppliedJob>, categoryService: AppliedJobsCategoryService);
    create(createAppliedJobDto: CreateAppliedJobDto): Promise<AppliedJob>;
    findAll(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateAppliedJobDto: UpdateAppliedJobDto): string;
    remove(id: number): string;
}
