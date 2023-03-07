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
var TaskService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const jobs_service_1 = require("../jobs/jobs.service");
const axios_1 = require("axios");
let TaskService = TaskService_1 = class TaskService {
    constructor() {
        this.logger = new common_1.Logger(TaskService_1.name);
    }
    async handleCron() {
        let urlsList = [
            "https://api.apify.com/v2/actor-tasks/peerless_protractor~google-jobs-scraper-task-2/runs/last/dataset/items?token=apify_api_XhPKZZyP7nTPD1y4SWtdNQYF3QkXHv1jkqa6",
            "https://api.apify.com/v2/actor-tasks/peerless_protractor~google-jobs-scraper-data-scientist/runs/last/dataset/items?token=apify_api_XhPKZZyP7nTPD1y4SWtdNQYF3QkXHv1jkqa6",
            "https://api.apify.com/v2/actor-tasks/peerless_protractor~blockchain/runs/last/dataset/items?token=apify_api_XhPKZZyP7nTPD1y4SWtdNQYF3QkXHv1jkqa6",
        ];
        for (let index = 0; index < urlsList.length; index++) {
            const element = urlsList[index];
            axios_1.default.get(element)
                .then(async (res) => {
                let data = res.data;
                if (data && data.length) {
                    for (let index = 0; index < data.length; index++) {
                        const element = data[index];
                        if (element && element.googleJobs) {
                            for (let index = 0; index < element.googleJobs.length; index++) {
                                let category = null;
                                if (element && element.searchQuery && element.searchQuery.term) {
                                    category = element.searchQuery.term;
                                    if (category) {
                                        category = category.toLowerCase();
                                    }
                                }
                                const job = element.googleJobs[index];
                                let resp = [];
                                let qualify = [];
                                try {
                                    if (job && job.jobHighlights && job.jobHighlights.length) {
                                        for (let index = 0; index < job.jobHighlights.length; index++) {
                                            const jobElement = job.jobHighlights[index];
                                            if (jobElement.title === "Qualifications") {
                                                qualify = [...jobElement.items];
                                            }
                                            else if (jobElement.title === "Responsibilities") {
                                                resp = [...jobElement.items];
                                            }
                                        }
                                    }
                                }
                                catch (error) {
                                }
                                let obj = {
                                    title: job.title,
                                    companyName: job.companyName,
                                    location: job.location,
                                    via: job.via,
                                    description: job.description,
                                    thumbnail: job.thumbnail,
                                    applyLink: job.applyLink.link ? job.applyLink.link : '',
                                    applyLinkTitle: job.applyLink.title ? job.applyLink.title : '',
                                    postedAt: job.metadata.postedAt ? job.metadata.postedAt : '',
                                    scheduleType: job.metadata.scheduleType ? job.metadata.scheduleType : '',
                                    workFromHome: job.metadata.workFromHome ? job.metadata.workFromHome : false,
                                    salary: job.metadata.salary ? job.metadata.salary : '',
                                    qualifications: [...qualify],
                                    responsibilities: [...resp], category: category
                                };
                                try {
                                    let sav = await this.jobService.createFromCronJob(obj);
                                }
                                catch (error) {
                                }
                            }
                        }
                    }
                }
            })
                .catch((err) => {
                console.log("hwew", err.message, element);
            });
        }
        this.logger.debug('Called when the second is 45', new Date().toISOString());
    }
};
__decorate([
    (0, common_1.Inject)(jobs_service_1.JobService),
    __metadata("design:type", jobs_service_1.JobService)
], TaskService.prototype, "jobService", void 0);
__decorate([
    (0, schedule_1.Cron)('0 1 * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskService.prototype, "handleCron", null);
TaskService = TaskService_1 = __decorate([
    (0, common_1.Injectable)()
], TaskService);
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map