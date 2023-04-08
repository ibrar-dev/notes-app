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
exports.AppliedJobsService = void 0;
const common_1 = require("@nestjs/common");
const applied_job_entity_1 = require("./entities/applied-job.entity");
const applied_jobs_categories_service_1 = require("./applied-jobs-categories.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AppliedJobsService = class AppliedJobsService {
    constructor(appliedJobsService, categoryService) {
        this.appliedJobsService = appliedJobsService;
        this.categoryService = categoryService;
    }
    async create(createAppliedJobDto) {
        try {
            let newCat = await this.categoryService.create(Object.assign({}, createAppliedJobDto.category));
            console.log(newCat);
            let newJob = await this.appliedJobsService.create(Object.assign(Object.assign({}, createAppliedJobDto), { category: newCat }));
            console.log(newJob);
            const savedJob = await this.appliedJobsService.insert(newJob);
            return savedJob.raw[0];
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async findAll() {
        try {
            let allJobs = await this.appliedJobsService.find({
                relations: {
                    category: true
                }
            });
            console.log("here", allJobs);
            return { result: allJobs };
        }
        catch (error) {
            console.log("here", error);
            return error;
        }
    }
    findOne(id) {
        return `This action returns a #${id} appliedJob`;
    }
    update(id, updateAppliedJobDto) {
        return `This action updates a #${id} appliedJob`;
    }
    remove(id) {
        return `This action removes a #${id} appliedJob`;
    }
};
AppliedJobsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(applied_job_entity_1.AppliedJob)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        applied_jobs_categories_service_1.AppliedJobsCategoryService])
], AppliedJobsService);
exports.AppliedJobsService = AppliedJobsService;
//# sourceMappingURL=applied-jobs.service.js.map