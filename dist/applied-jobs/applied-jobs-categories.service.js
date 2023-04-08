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
exports.AppliedJobsCategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_entity_1 = require("./entities/category.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AppliedJobsCategoryService = class AppliedJobsCategoryService {
    constructor(appliedJobsService) {
        this.appliedJobsService = appliedJobsService;
    }
    async create(createAppliedJobDto) {
        try {
            let findCat = await this.appliedJobsService.findOne({ where: { title: createAppliedJobDto.title } });
            if (findCat) {
                console.log(findCat);
                return findCat.id;
            }
            else {
                let newJob = await this.appliedJobsService.create(Object.assign({}, createAppliedJobDto));
                console.log(newJob);
                const savedJob = await this.appliedJobsService.insert(newJob);
                return savedJob.raw[0];
            }
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
};
AppliedJobsCategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.AppliedJobCategory)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AppliedJobsCategoryService);
exports.AppliedJobsCategoryService = AppliedJobsCategoryService;
//# sourceMappingURL=applied-jobs-categories.service.js.map