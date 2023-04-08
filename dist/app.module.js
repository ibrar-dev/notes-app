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
const resumeQualification_entity_1 = require("./resume/entities/resumeQualification.entity");
const certifications_entity_1 = require("./resume/entities/certifications.entity");
const skills_entity_1 = require("./resume/entities/skills.entity");
const experience_entity_1 = require("./resume/entities/experience.entity");
const relatedSkills_entity_1 = require("./resume/entities/relatedSkills.entity");
const projects_entity_1 = require("./resume/entities/projects.entity");
const location_entity_1 = require("./resume/entities/location.entity");
const publications_entity_1 = require("./resume/entities/publications.entity");
const achievement_entity_1 = require("./resume/entities/achievement.entity");
const applied_jobs_module_1 = require("./applied-jobs/applied-jobs.module");
const applied_job_entity_1 = require("./applied-jobs/entities/applied-job.entity");
const category_entity_1 = require("./applied-jobs/entities/category.entity");
const category_entity_2 = require("./jobs/entities/category.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [schedule_1.ScheduleModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                host: 'ec2-3-21-254-99.us-east-2.compute.amazonaws.com',
                password: '1234',
                database: 'jobs',
                entities: [users_entity_1.User, qualifications_entity_1.Qualifications, jobs_entity_1.Job, resume_entity_1.Resume, language_entity_1.Language, phone_entity_1.Phone, email_entity_1.Email, website_entity_1.Website, salary_entity_1.Salary, address_entity_1.Address, resumeQualification_entity_1.ResumeQualification, certifications_entity_1.Certification, skills_entity_1.Skills, experience_entity_1.Experience, relatedSkills_entity_1.RelatedSkills, projects_entity_1.Projects, publications_entity_1.Publication, location_entity_1.Location, achievement_entity_1.Achievement, applied_job_entity_1.AppliedJob, category_entity_1.AppliedJobCategory, category_entity_2.JobCategory],
                synchronize: true,
                type: 'postgres',
                port: 5432,
                username: 'bobby',
            }),
            auth_module_1.AuthModule, users_module_1.UsersModule, qualifications_module_1.QualificationModule, jobs_module_1.JobModule, task_module_1.TaskModule, resume_module_1.ResumeModule, languages_module_1.LanguagesModule, applied_jobs_module_1.AppliedJobsModule],
        controllers: [app_controller_1.AppController, users_controller_1.UsersController, auth_controller_1.AuthController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map