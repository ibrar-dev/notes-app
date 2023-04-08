import { AppliedJobsService } from './applied-jobs.service';
import { CreateAppliedJobDto } from './dto/create-applied-job.dto';
import { UpdateAppliedJobDto } from './dto/update-applied-job.dto';
import { Response } from 'express';
export declare class AppliedJobsController {
    private readonly appliedJobsService;
    constructor(appliedJobsService: AppliedJobsService);
    create(createAppliedJobDto: CreateAppliedJobDto, res: Response): Promise<void>;
    findAll(): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateAppliedJobDto: UpdateAppliedJobDto): string;
    remove(id: string): string;
}
