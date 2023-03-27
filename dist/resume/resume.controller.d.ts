/// <reference types="multer" />
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
export declare class ResumeController {
    private readonly resumeService;
    constructor(resumeService: ResumeService);
    create(createResumeDto: CreateResumeDto): Promise<import("./entities/resume.entity").Resume>;
    findAll(): Promise<any>;
    findCount(): Promise<any>;
    findOne(userId: string): Promise<any>;
    update(id: string, updateResumeDto: UpdateResumeDto): string;
    remove(id: string): string;
    deleteByCategory(res: Response): Promise<any>;
    uploadFile(body: any, req: any, file: Express.Multer.File): Promise<any>;
}
