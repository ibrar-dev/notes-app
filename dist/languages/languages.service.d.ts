import { Repository } from 'typeorm';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { Language } from './entities/language.entity';
export declare class LanguagesService {
    private readonly resumeRepository;
    constructor(resumeRepository: Repository<Language>);
    create(createLanguageDto: CreateLanguageDto): string;
    findAll(): Promise<any>;
    getUNique(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateLanguageDto: UpdateLanguageDto): string;
    remove(id: number): string;
}
