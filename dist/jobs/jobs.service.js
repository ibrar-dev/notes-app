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
exports.JobService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jobs_entity_1 = require("./entities/jobs.entity");
let JobService = class JobService {
    constructor(jobsRepository) {
        this.jobsRepository = jobsRepository;
    }
    async create(createTourDto) {
        try {
            let newJob = this.jobsRepository.create(createTourDto);
            return this.jobsRepository.save(newJob);
        }
        catch (error) {
            return error;
        }
    }
    async createFromCronJob(createTourDto) {
        try {
            let newJob = this.jobsRepository.create(createTourDto);
            await this.jobsRepository.save(newJob);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async findAll(query) {
        try {
            const take = query.limit || 10;
            const page = query.page || 1;
            const skip = (page - 1) * take;
            const category = query.category;
            const company = query.company;
            let filter = {
                take: take,
                skip: skip
            };
            let whereClause = {};
            if (category) {
                whereClause['category'] = (0, typeorm_2.Raw)(alias => `${alias} ILIKE '%${category}%'`);
            }
            if (company) {
                whereClause['companyName'] = (0, typeorm_2.Raw)(alias => `${alias} ILIKE '%${company}%'`);
            }
            if (Object.keys(whereClause).length > 0) {
                filter['where'] = Object.assign({}, whereClause);
            }
            const [result, total] = await this.jobsRepository.findAndCount(Object.assign(Object.assign({}, filter), { order: { created_at: "DESC" } }));
            return { page: page, limit: take, total: total, result: result };
        }
        catch (error) {
            console.log("here");
            return error;
        }
    }
    async count() {
        try {
            const totalJObs = await this.jobsRepository.count();
            return totalJObs;
        }
        catch (error) {
            return false;
        }
    }
    async findOne(id) {
        try {
            const result = await this.jobsRepository.findOne({
                where: { id: id }
            });
            return { success: true, result: result };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async getCategories() {
        try {
            const res = await this.jobsRepository
                .createQueryBuilder('job')
                .select('DISTINCT job.category')
                .getRawMany();
            return { result: res };
        }
        catch (error) {
            console.log("here");
            return error;
        }
    }
};
JobService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(jobs_entity_1.Job)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], JobService);
exports.JobService = JobService;
//# sourceMappingURL=jobs.service.js.map