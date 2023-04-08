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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobCategory = void 0;
const typeorm_1 = require("typeorm");
const jobs_entity_1 = require("./jobs.entity");
let JobCategory = class JobCategory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", String)
], JobCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], JobCategory.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", Number)
], JobCategory.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => jobs_entity_1.Job, (ph) => ph.job_category, { cascade: true }),
    __metadata("design:type", Array)
], JobCategory.prototype, "jobs", void 0);
JobCategory = __decorate([
    (0, typeorm_1.Entity)('job_category')
], JobCategory);
exports.JobCategory = JobCategory;
//# sourceMappingURL=category.entity.js.map