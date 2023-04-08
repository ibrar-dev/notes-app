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
exports.JobsCategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_entity_1 = require("./entities/category.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let JobsCategoryService = class JobsCategoryService {
    constructor(jobsService) {
        this.jobsService = jobsService;
    }
    async create(createAppliedJobDto) {
        try {
            let findCat = await this.jobsService.findOne({ where: { title: createAppliedJobDto.title } });
            if (findCat) {
                console.log(findCat);
                return findCat.id;
            }
            else {
                let newJob = await this.jobsService.create(Object.assign({}, createAppliedJobDto));
                console.log(newJob);
                const savedJob = await this.jobsService.insert(newJob);
                return savedJob.raw[0];
            }
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async find() {
        try {
            const result = await this.jobsService.find();
            return { success: true, result: result };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async getCountSubQuery(sabQuery) {
        try {
            const result = await this.jobsService.find();
            return { success: true, result: result };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
};
JobsCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.JobCategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JobsCategoryService);
exports.JobsCategoryService = JobsCategoryService;
//# sourceMappingURL=jobs-category.service.js.map