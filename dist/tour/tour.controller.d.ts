import { TourService } from './tour.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
export declare class TourController {
    private readonly tourService;
    constructor(tourService: TourService);
    create(createTourDto: CreateTourDto): Promise<import("./entities/tour.entity").Tour>;
    findAll(): Promise<import("./entities/tour.entity").Tour[]>;
    findOne(id: string): string;
    update(id: string, updateTourDto: UpdateTourDto): string;
    remove(id: string): string;
}
