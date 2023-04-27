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
const jobs_category_service_1 = require("./jobs-category.service");
let JobService = class JobService {
    constructor(jobsRepository, jobCategoryService) {
        this.jobsRepository = jobsRepository;
        this.jobCategoryService = jobCategoryService;
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
            let newCat = await this.jobCategoryService.create({ title: createTourDto.category, order: 5 });
            console.log(newCat);
            let newJob = this.jobsRepository.create(Object.assign(Object.assign({}, createTourDto), { job_category: newCat }));
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
            const [result, total] = await this.jobsRepository.findAndCount(Object.assign(Object.assign({}, filter), { order: { created_at: "DESC" }, relations: { job_category: true } }));
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
                relations: {
                    job_category: true
                },
                where: { id: id }
            });
            return { success: true, result: result };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async deleteByCategory() {
        try {
            const result = await this.jobsRepository.createQueryBuilder()
                .delete()
                .from(jobs_entity_1.Job)
                .where("category = :id", { id: 'doctor' })
                .execute();
            return { success: true, result: result };
        }
        catch (error) {
            return { success: false, error: error.message };
        }
    }
    async getCategories() {
        try {
            const res = await this.jobCategoryService.find();
            return res;
        }
        catch (error) {
            console.log("here");
            return error;
        }
    }
    async getCompanies(query) {
        try {
            const take = query.limit || 10;
            const page = query.page || 1;
            const skip = (page - 1) * take;
            const totalCountQueryBuilder = await this.jobsRepository.createQueryBuilder('job')
                .select('COUNT(DISTINCT job.companyName)', 'count');
            const { count: totalCount } = await totalCountQueryBuilder.getRawOne();
            const queryBuilder = await this.jobsRepository.createQueryBuilder('job')
                .select('job.companyName', 'company')
                .addSelect('COALESCE(job.thumbnail, \'\')', 'thumbnail')
                .addSelect('COUNT(job.id)', 'jobs')
                .groupBy('job.companyName,thumbnail')
                .orderBy('jobs', 'DESC')
                .skip(skip)
                .take(take);
            const result = await queryBuilder.getRawMany();
            const combinedJobs = result.reduce((acc, curr) => {
                const existingCompany = acc.find(item => item.company === curr.company);
                if (existingCompany) {
                    existingCompany.jobs = Number(existingCompany.jobs) + Number(curr.jobs);
                    if (curr.thumbnail) {
                        existingCompany.thumbnail = curr.thumbnail;
                    }
                }
                else {
                    acc.push(curr);
                }
                return acc;
            }, []);
            return { page: page, limit: take, total: totalCount, result: combinedJobs };
        }
        catch (error) {
            console.log("Error:", error);
            return error;
        }
    }
    async totalCompanies() {
        try {
            const totalCountQueryBuilder = await this.jobsRepository.createQueryBuilder('job')
                .select('COUNT(DISTINCT job.companyName)', 'count');
            const { count: totalCount } = await totalCountQueryBuilder.getRawOne();
            return totalCount;
        }
        catch (error) {
            console.log("Error:", error);
            return error;
        }
    }
    async getTopCompanies() {
        try {
            const queryBuilder = await this.jobsRepository.createQueryBuilder('job')
                .select('job.companyName', 'company')
                .addSelect('COALESCE(job.thumbnail, \'\')', 'thumbnail')
                .addSelect('COUNT(job.id)', 'jobs')
                .groupBy('job.companyName,thumbnail')
                .orderBy('jobs', 'DESC')
                .take(20);
            const result = await queryBuilder.getRawMany();
            const combinedJobs = result.reduce((acc, curr) => {
                const existingCompany = acc.find(item => item.company === curr.company);
                if (existingCompany) {
                    existingCompany.jobs = Number(existingCompany.jobs) + Number(curr.jobs);
                    if (curr.thumbnail) {
                        existingCompany.thumbnail = curr.thumbnail;
                    }
                }
                else {
                    acc.push(curr);
                }
                return acc;
            }, []);
            return combinedJobs;
        }
        catch (error) {
            console.log("Error:", error);
            return error;
        }
    }
    async getLatestJobs() {
        try {
            const result = await this.jobsRepository.query(`
      SELECT *
        FROM (
          SELECT *,
                 ROW_NUMBER() OVER (PARTITION BY "jobCategoryId" ORDER BY created_at) AS order_number
          FROM public.job
        ) AS j
        JOIN public.job_category jc ON j."jobCategoryId" = jc.id
        WHERE j.order_number <= 20
      `);
            return result;
        }
        catch (error) {
            console.log("here");
            return error;
        }
    }
    async getJobsCountByCategory() {
        try {
            const result = await this.jobsRepository.query(`
        SELECT c.title AS category, COUNT(j.id) AS jobs
        FROM public.job j
        INNER JOIN job_category c ON j."jobCategoryId" = c.id 
        GROUP BY c.title
      `);
            return result;
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
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jobs_category_service_1.JobsCategoryService])
], JobService);
exports.JobService = JobService;
//# sourceMappingURL=jobs.service.js.map