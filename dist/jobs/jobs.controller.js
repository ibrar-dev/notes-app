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
exports.JobController = void 0;
const common_1 = require("@nestjs/common");
const jobs_service_1 = require("./jobs.service");
const response_job_dto_1 = require("./dto/response-job.dto");
const swagger_1 = require("@nestjs/swagger");
let JobController = class JobController {
    constructor(jobService) {
        this.jobService = jobService;
    }
    async findAll(res, page, limit, category, company, time, type) {
        try {
            let resp = await this.jobService.findAll({ page, limit, category, company, time, type });
            if (resp) {
                res.status(common_1.HttpStatus.OK).json(resp);
            }
            else {
                res.status(common_1.HttpStatus.NO_CONTENT).json({ message: 'Please check your Limits, No record Found' });
            }
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
    async getJobTitles(res) {
        try {
            let resp = await this.jobService.getCategories();
            if (resp) {
                res.status(common_1.HttpStatus.OK).json(resp);
            }
            else {
                res.status(common_1.HttpStatus.NO_CONTENT).json({ message: 'Please check your Limits, No record Found' });
            }
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
    async getTypes(res) {
        try {
            let resp = await this.jobService.getTypes();
            if (resp) {
                res.status(common_1.HttpStatus.OK).json(resp);
            }
            else {
                res.status(common_1.HttpStatus.NO_CONTENT).json({ message: 'Please check your Limits, No record Found' });
            }
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
    async getJobCountByCategory(res) {
        try {
            let resp = await this.jobService.getJobsCountByCategory();
            if (resp) {
                res.status(common_1.HttpStatus.OK).json(resp);
            }
            else {
                res.status(common_1.HttpStatus.NO_CONTENT).json({ message: 'Please check your Limits, No record Found' });
            }
        }
        catch (error) {
            console.log("here", error.message);
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
    async getLatestJobs(res) {
        try {
            let resp = await this.jobService.getLatestJobs();
            if (resp) {
                res.status(common_1.HttpStatus.OK).json(resp);
            }
            else {
                res.status(common_1.HttpStatus.NO_CONTENT).json({ message: 'Please check your Limits, No record Found' });
            }
        }
        catch (error) {
            console.log("here", error.message);
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
    async getCompanies(res, page, limit) {
        try {
            let resp = await this.jobService.getCompanies({ page, limit });
            if (resp) {
                res.status(common_1.HttpStatus.OK).json(resp);
            }
            else {
                res.status(common_1.HttpStatus.NO_CONTENT).json({ message: 'No record Found' });
            }
        }
        catch (error) {
            console.log("here", error.message);
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
    async totalCompanies(res) {
        try {
            let resp = await this.jobService.totalCompanies();
            if (resp) {
                res.status(common_1.HttpStatus.OK).json(resp);
            }
            else {
                res.status(common_1.HttpStatus.NO_CONTENT).json({ message: 'No record Found' });
            }
        }
        catch (error) {
            console.log("here", error.message);
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
    async getTopCompanies(res) {
        try {
            let resp = await this.jobService.getTopCompanies();
            if (resp) {
                res.status(common_1.HttpStatus.OK).json(resp);
            }
            else {
                res.status(common_1.HttpStatus.NO_CONTENT).json({ message: 'No record Found' });
            }
        }
        catch (error) {
            console.log("here", error.message);
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
    async count(res) {
        try {
            let resp = await this.jobService.count();
            if (resp) {
                res.status(common_1.HttpStatus.OK).json(resp);
            }
            else {
                res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
            }
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
    async findOne(res, id) {
        try {
            if (id) {
                let resp = await this.jobService.findOne(id);
                if (resp.success) {
                    res.status(common_1.HttpStatus.OK).json(resp);
                }
                else {
                    res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'No Record found with this ID' });
                }
            }
            else {
                res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Please Enter a valid ID' });
            }
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
    async deleteByCategory(res) {
        try {
            let resp = await this.jobService.deleteByCategory();
            return resp;
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
};
__decorate([
    (0, swagger_1.ApiTags)('Job'),
    (0, swagger_1.ApiExtraModels)(response_job_dto_1.JobsResponse),
    (0, swagger_1.ApiResponse)({
        schema: {
            '$ref': (0, swagger_1.getSchemaPath)(response_job_dto_1.JobsResponse)
        }
    }),
    (0, swagger_1.ApiQuery)({ name: 'category', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'company', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'time', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'type', required: false, type: String }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __param(3, (0, common_1.Query)('category')),
    __param(4, (0, common_1.Query)('company')),
    __param(5, (0, common_1.Query)('time')),
    __param(6, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number, String, String, String, String]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiTags)('Job'),
    (0, common_1.Get)('job-categories'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getJobTitles", null);
__decorate([
    (0, swagger_1.ApiTags)('Job'),
    (0, common_1.Get)('get-types'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getTypes", null);
__decorate([
    (0, swagger_1.ApiTags)('Job'),
    (0, common_1.Get)('job-count-by-categories'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getJobCountByCategory", null);
__decorate([
    (0, swagger_1.ApiTags)('Job'),
    (0, common_1.Get)('latest-jobs'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getLatestJobs", null);
__decorate([
    (0, swagger_1.ApiTags)('Companies'),
    (0, common_1.Get)('companies'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getCompanies", null);
__decorate([
    (0, swagger_1.ApiTags)('Companies'),
    (0, common_1.Get)('companies-count'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "totalCompanies", null);
__decorate([
    (0, swagger_1.ApiTags)('Companies'),
    (0, common_1.Get)('top-companies'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "getTopCompanies", null);
__decorate([
    (0, swagger_1.ApiTags)('Job'),
    (0, common_1.Get)('count'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "count", null);
__decorate([
    (0, swagger_1.ApiTags)('Job'),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], JobController.prototype, "deleteByCategory", null);
JobController = __decorate([
    (0, common_1.Controller)('job'),
    __metadata("design:paramtypes", [jobs_service_1.JobService])
], JobController);
exports.JobController = JobController;
//# sourceMappingURL=jobs.controller.js.map