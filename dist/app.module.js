"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const users_controller_1 = require("./users/users.controller");
const auth_controller_1 = require("./auth/auth.controller");
const users_entity_1 = require("./users/entity/users.entity");
const jobs_module_1 = require("./jobs/jobs.module");
const jobs_entity_1 = require("./jobs/entities/jobs.entity");
const qualifications_module_1 = require("./qualification/qualifications.module");
const qualifications_entity_1 = require("./qualification/entities/qualifications.entity");
const schedule_1 = require("@nestjs/schedule");
const task_module_1 = require("./task/task.module");
const resume_module_1 = require("./resume/resume.module");
const languages_module_1 = require("./languages/languages.module");
const resume_entity_1 = require("./resume/entities/resume.entity");
const language_entity_1 = require("./languages/entities/language.entity");
const phone_entity_1 = require("./resume/entities/phone.entity");
const email_entity_1 = require("./resume/entities/email.entity");
const website_entity_1 = require("./resume/entities/website.entity");
const salary_entity_1 = require("./resume/entities/salary.entity");
const address_entity_1 = require("./resume/entities/address.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [schedule_1.ScheduleModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                host: 'ec2-3-21-254-99.us-east-2.compute.amazonaws.com',
                password: '1234',
                database: 'jobs',
                entities: [users_entity_1.User, qualifications_entity_1.Qualifications, jobs_entity_1.Job, resume_entity_1.Resume, language_entity_1.Language, phone_entity_1.Phone, email_entity_1.Email, website_entity_1.Website, salary_entity_1.Salary, address_entity_1.Address],
                synchronize: true,
                type: 'postgres',
                port: 5432,
                username: 'bobby',
            }),
            auth_module_1.AuthModule, users_module_1.UsersModule, qualifications_module_1.QualificationModule, jobs_module_1.JobModule, task_module_1.TaskModule, resume_module_1.ResumeModule, languages_module_1.LanguagesModule],
        controllers: [app_controller_1.AppController, users_controller_1.UsersController, auth_controller_1.AuthController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map