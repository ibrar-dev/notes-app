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
exports.AppliedJobCategory = void 0;
const typeorm_1 = require("typeorm");
const applied_job_entity_1 = require("./applied-job.entity");
let AppliedJobCategory = class AppliedJobCategory {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", String)
], AppliedJobCategory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", String)
], AppliedJobCategory.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unique: true }),
    __metadata("design:type", Number)
], AppliedJobCategory.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => applied_job_entity_1.AppliedJob, (ph) => ph.category, { cascade: true }),
    __metadata("design:type", Array)
], AppliedJobCategory.prototype, "jobs", void 0);
AppliedJobCategory = __decorate([
    (0, typeorm_1.Entity)('appliedjobcategory')
], AppliedJobCategory);
exports.AppliedJobCategory = AppliedJobCategory;
//# sourceMappingURL=category.entity.js.map