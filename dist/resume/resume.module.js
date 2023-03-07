"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeModule = void 0;
const common_1 = require("@nestjs/common");
const resume_service_1 = require("./resume.service");
const resume_controller_1 = require("./resume.controller");
const typeorm_1 = require("@nestjs/typeorm");
const phone_entity_1 = require("./entities/phone.entity");
const resume_entity_1 = require("./entities/resume.entity");
const email_entity_1 = require("./entities/email.entity");
const website_entity_1 = require("./entities/website.entity");
const salary_entity_1 = require("./entities/salary.entity");
const address_entity_1 = require("./entities/address.entity");
let ResumeModule = class ResumeModule {
};
ResumeModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([resume_entity_1.Resume, phone_entity_1.Phone, email_entity_1.Email, website_entity_1.Website, salary_entity_1.Salary, address_entity_1.Address])],
        controllers: [resume_controller_1.ResumeController],
        providers: [resume_service_1.ResumeService],
    })
], ResumeModule);
exports.ResumeModule = ResumeModule;
//# sourceMappingURL=resume.module.js.map