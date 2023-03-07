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
const email_entity_1 = require("./email.entity");
const phone_entity_1 = require("./phone.entity");
const salary_entity_1 = require("./salary.entity");
const website_entity_1 = require("./website.entity");
let Resume = class Resume {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Resume.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Resume.prototype, "resumeFileName", void 0);
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
    (0, typeorm_1.OneToOne)(() => salary_entity_1.Salary, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Resume.prototype, "expectedSalary", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => address_entity_1.Address, (ph) => ph.res, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Resume.prototype, "address", void 0);
Resume = __decorate([
    (0, typeorm_1.Entity)('resumes')
], Resume);
exports.Resume = Resume;
//# sourceMappingURL=resume.entity.js.map