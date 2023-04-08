"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobModule = void 0;
const common_1 = require("@nestjs/common");
const jobs_service_1 = require("./jobs.service");
const jobs_controller_1 = require("./jobs.controller");
const typeorm_1 = require("@nestjs/typeorm");
const jobs_entity_1 = require("./entities/jobs.entity");
const category_entity_1 = require("./entities/category.entity");
const jobs_category_service_1 = require("./jobs-category.service");
let JobModule = class JobModule {
};
JobModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([jobs_entity_1.Job, category_entity_1.JobCategory])],
        controllers: [jobs_controller_1.JobController],
        providers: [jobs_service_1.JobService, jobs_category_service_1.JobsCategoryService],
        exports: [jobs_service_1.JobService],
    })
], JobModule);
exports.JobModule = JobModule;
//# sourceMappingURL=jobs.module.js.map