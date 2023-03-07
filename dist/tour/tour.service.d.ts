import { Repository } from 'typeorm';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Tour } from './entities/tour.entity';
export declare class TourService {
    private readonly toursRepository;
    constructor(toursRepository: Repository<Tour>);
    create(createTourDto: CreateTourDto): Promise<Tour>;
    findAll(): Promise<Tour[]>;
    findOne(id: number): string;
    update(id: number, updateTourDto: UpdateTourDto): string;
    remove(id: number): string;
}
