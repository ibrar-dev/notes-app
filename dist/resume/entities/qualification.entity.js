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
exports.Qualification = void 0;
const typeorm_1 = require("typeorm");
const resume_entity_1 = require("./resume.entity");
let Qualification = class Qualification {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Qualification.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "institutionName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Qualification.prototype, "institutionConfidenceScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "institutionType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "institutionLocation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "institutionCity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "institutionState", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "institutionStateIsoCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "institutionCountry", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "institutionIsoAlpha2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "institutionIsoAlpha3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "institutionUNCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "subInstitutionName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Qualification.prototype, "subInstitutionConfidenceScore", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "subInstitutionType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "subInstitutionLocation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "subInstitutionCity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "subInstitutionState", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "subInstitutionStateIsoCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "subInstitutionCountry", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "subInstitutionIsoAlpha2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "subInstitutionIsoAlpha3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "subInstitutionUNCode", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "degreeName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "normalizeDegree", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Qualification.prototype, "degreeScore", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true }),
    __metadata("design:type", Array)
], Qualification.prototype, "specialization", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "formattedDegreePeriod", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Qualification.prototype, "StartDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Qualification.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "aggregateValue", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Qualification.prototype, "aggregateMeasureType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => resume_entity_1.Resume, (user) => user.qualification),
    __metadata("design:type", resume_entity_1.Resume)
], Qualification.prototype, "res", void 0);
Qualification = __decorate([
    (0, typeorm_1.Entity)('qualification')
], Qualification);
exports.Qualification = Qualification;
//# sourceMappingURL=qualification.entity.js.map