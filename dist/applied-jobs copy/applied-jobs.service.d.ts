import { CreateAppliedJobDto } from './dto/create-applied-job.dto';
import { UpdateAppliedJobDto } from './dto/update-applied-job.dto';
import { AppliedJob } from './entities/applied-job.entity';
import { Repository } from 'typeorm';
export declare class AppliedJobsService {
    private readonly appliedJobsService;
    constructor(appliedJobsService: Repository<AppliedJob>);
    create(createAppliedJobDto: CreateAppliedJobDto): Promise<AppliedJob>;
    findAll(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateAppliedJobDto: UpdateAppliedJobDto): string;
    remove(id: number): string;
}
