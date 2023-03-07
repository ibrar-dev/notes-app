"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const language_entity_1 = require("./entities/language.entity");
let LanguagesService = class LanguagesService {
    constructor(resumeRepository) {
        this.resumeRepository = resumeRepository;
    }
    create(createLanguageDto) {
        return 'This action adds a new language';
    }
    async findAll() {
        try {
            const take = 10;
            const page = 1;
            const skip = (page - 1) * take;
            const res = await this.resumeRepository.find();
            return { page: page, limit: take, result: res };
        }
        catch (error) {
            console.log("here");
            return error;
        }
    }
    async getUNique() {
        try {
            const res = await this.resumeRepository
                .createQueryBuilder('languages')
                .select('DISTINCT languages.title, languages.code')
                .getRawMany();
            return { result: res };
        }
        catch (error) {
            console.log("here");
            return error;
        }
    }
    findOne(id) {
        return `This action returns a #${id} language`;
    }
    update(id, updateLanguageDto) {
        return `This action updates a #${id} language`;
    }
    remove(id) {
        return `This action removes a #${id} language`;
    }
};
LanguagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(language_entity_1.Language)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LanguagesService);
exports.LanguagesService = LanguagesService;
//# sourceMappingURL=languages.service.js.map