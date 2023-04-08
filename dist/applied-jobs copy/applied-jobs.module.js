"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppliedJobsModule = void 0;
const common_1 = require("@nestjs/common");
const applied_jobs_service_1 = require("./applied-jobs.service");
const applied_jobs_controller_1 = require("./applied-jobs.controller");
const typeorm_1 = require("@nestjs/typeorm");
const applied_job_entity_1 = require("./entities/applied-job.entity");
const category_entity_1 = require("./entities/category.entity");
let AppliedJobsModule = class AppliedJobsModule {
};
AppliedJobsModule = __decorate([
    (0, common_1.Module)({
        controllers: [applied_jobs_controller_1.AppliedJobsController],
        providers: [applied_jobs_service_1.AppliedJobsService],
        imports: [typeorm_1.TypeOrmModule.forFeature([applied_job_entity_1.AppliedJob, category_entity_1.AppliedJobCategory])],
    })
], AppliedJobsModule);
exports.AppliedJobsModule = AppliedJobsModule;
//# sourceMappingURL=applied-jobs.module.js.map