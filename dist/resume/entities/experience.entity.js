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
exports.Experience = void 0;
const typeorm_1 = require("typeorm");
const projects_entity_1 = require("./projects.entity");
const relatedSkills_entity_1 = require("./relatedSkills.entity");
const resume_entity_1 = require("./resume.entity");
let Experience = class Experience {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Experience.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "employerName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "employerFormattedName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Experience.prototype, "employerConfidenceScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "jobFormattedName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "jobAlias", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Experience.prototype, "jobConfidenceScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "jobPeriod", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "formattedJobPeriod", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "isCurrentEmployer", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Experience.prototype, "jobDescription", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => relatedSkills_entity_1.RelatedSkills, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Experience.prototype, "relatedSkills", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => projects_entity_1.Projects, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Experience.prototype, "projects", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => resume_entity_1.Resume, (user) => user.experience),
    __metadata("design:type", resume_entity_1.Resume)
], Experience.prototype, "res", void 0);
Experience = __decorate([
    (0, typeorm_1.Entity)('experience')
], Experience);
exports.Experience = Experience;
//# sourceMappingURL=experience.entity.js.map