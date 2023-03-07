import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
export declare class FacilityService {
    create(createFacilityDto: CreateFacilityDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateFacilityDto: UpdateFacilityDto): string;
    remove(id: number): string;
}
