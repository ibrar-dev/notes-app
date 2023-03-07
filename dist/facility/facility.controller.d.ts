import { FacilityService } from './facility.service';
import { CreateFacilityDto } from './dto/create-facility.dto';
import { UpdateFacilityDto } from './dto/update-facility.dto';
export declare class FacilityController {
    private readonly facilityService;
    constructor(facilityService: FacilityService);
    create(createFacilityDto: CreateFacilityDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateFacilityDto: UpdateFacilityDto): string;
    remove(id: string): string;
}
