import { CreateResumeDto } from './dto/create-resume.dto';
import { UpdateResumeDto } from './dto/update-resume.dto';
import { Repository } from 'typeorm';
import { Resume } from './entities/resume.entity';
export declare class ResumeService {
    private readonly resumeRepository;
    constructor(resumeRepository: Repository<Resume>);
    create(createResumeDto: CreateResumeDto): Promise<Resume>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: number, updateResumeDto: UpdateResumeDto): string;
    remove(id: number): string;
    uploadResume(res: any): Promise<any>;
}
