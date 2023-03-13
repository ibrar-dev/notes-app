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
exports.Resume = void 0;
const typeorm_1 = require("typeorm");
const language_entity_1 = require("../../languages/entities/language.entity");
const address_entity_1 = require("./address.entity");
const certifications_entity_1 = require("./certifications.entity");
const email_entity_1 = require("./email.entity");
const experience_entity_1 = require("./experience.entity");
const phone_entity_1 = require("./phone.entity");
const publications_entity_1 = require("./publications.entity");
const resumeQualification_entity_1 = require("./resumeQualification.entity");
const salary_entity_1 = require("./salary.entity");
const skills_entity_1 = require("./skills.entity");
const website_entity_1 = require("./website.entity");
const location_entity_1 = require("./location.entity");
const achievement_entity_1 = require("./achievement.entity");
let Resume = class Resume {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Resume.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "resumeFileName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "resumeLanguage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "resumeLanguageCode", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "parsingDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "titleName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "middleName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "formattedName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Resume.prototype, "nameScore", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "fatherName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "motherName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "maritalStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "nationality", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "uniqueId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "licenseNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "passportNumber", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "dateOfExpiry", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "dateOfIssue", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "placeOfIssue", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "panNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "visaStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "subCategory", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "qualification", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "certificationText", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "skillBlock", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "skillKeywords", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "experienceText", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "currentEmployer", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "jobProfile", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "workedPeriodTotalExperienceInMonths", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "workedPeriodTotalExperienceInYear", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "workedPeriodTotalExperienceRange", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "gapPeriod", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "averageStay", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "longestStay", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "summary", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "executiveSummary", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "managementSummary", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "coverLetter", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "publication", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "availability", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "hobbies", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "objectives", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "achievement", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "references", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Resume.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => language_entity_1.Language, (category) => category.title, {
        cascade: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Resume.prototype, "languages", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => phone_entity_1.Phone, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => email_entity_1.Email, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => website_entity_1.Website, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => salary_entity_1.Salary, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Resume.prototype, "currentSalary", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => salary_entity_1.Salary, { nullable: true, eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Resume.prototype, "expectedSalary", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => address_entity_1.Address, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resumeQualification_entity_1.ResumeQualification, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "qualifications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => certifications_entity_1.Certification, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "certification", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => skills_entity_1.Skills, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "skills", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => experience_entity_1.Experience, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => publications_entity_1.Publication, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "publications", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => location_entity_1.Location, (ph) => ph.res1, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "currentLocation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => location_entity_1.Location, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "preferredLocation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => achievement_entity_1.Achievement, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "achievements", void 0);
Resume = __decorate([
    (0, typeorm_1.Entity)('resumes')
], Resume);
exports.Resume = Resume;
//# sourceMappingURL=resume.entity.js.map