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
exports.AppliedJobsController = void 0;
const common_1 = require("@nestjs/common");
const applied_jobs_service_1 = require("./applied-jobs.service");
const create_applied_job_dto_1 = require("./dto/create-applied-job.dto");
const update_applied_job_dto_1 = require("./dto/update-applied-job.dto");
const swagger_1 = require("@nestjs/swagger");
let AppliedJobsController = class AppliedJobsController {
    constructor(appliedJobsService) {
        this.appliedJobsService = appliedJobsService;
    }
    async create(createAppliedJobDto, res) {
        try {
            let resp = await this.appliedJobsService.create(createAppliedJobDto);
            console.log(resp);
            res.status(common_1.HttpStatus.CREATED).json({ data: resp });
        }
        catch (error) {
            res.status(common_1.HttpStatus.BAD_REQUEST).json({ message: 'Something went wrong' });
        }
    }
    findAll() {
        return this.appliedJobsService.findAll();
    }
    findOne(id) {
        return this.appliedJobsService.findOne(+id);
    }
    update(id, updateAppliedJobDto) {
        return this.appliedJobsService.update(+id, updateAppliedJobDto);
    }
    remove(id) {
        return this.appliedJobsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_applied_job_dto_1.CreateAppliedJobDto, Object]),
    __metadata("design:returntype", Promise)
], AppliedJobsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppliedJobsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppliedJobsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_applied_job_dto_1.UpdateAppliedJobDto]),
    __metadata("design:returntype", void 0)
], AppliedJobsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppliedJobsController.prototype, "remove", null);
AppliedJobsController = __decorate([
    (0, swagger_1.ApiTags)('applied-jobs'),
    (0, common_1.Controller)('applied-jobs'),
    __metadata("design:paramtypes", [applied_jobs_service_1.AppliedJobsService])
], AppliedJobsController);
exports.AppliedJobsController = AppliedJobsController;
//# sourceMappingURL=applied-jobs.controller.js.map