import { LanguagesService } from './languages.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
export declare class LanguagesController {
    private readonly languagesService;
    constructor(languagesService: LanguagesService);
    create(createLanguageDto: CreateLanguageDto): string;
    findAll(): Promise<any>;
    totalLanguages(): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateLanguageDto: UpdateLanguageDto): string;
    remove(id: string): string;
}
