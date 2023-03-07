import { CreateQualificationDto } from './dto/create-qualification.dto';
import { UpdateQualificationDto } from './dto/update-qualification.dto';
export declare class QualificationService {
    create(createFacilityDto: CreateQualificationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFacilityDto: UpdateQualificationDto): string;
    remove(id: number): string;
}
