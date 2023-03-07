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
exports.JobsResponse = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_job_dto_1 = require("./create-job.dto");
const swagger_1 = require("@nestjs/swagger");
class JobsResponse extends (0, mapped_types_1.PartialType)(create_job_dto_1.CreateJobDto) {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: 'number' }),
    __metadata("design:type", Number)
], JobsResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: 'number' }),
    __metadata("design:type", Number)
], JobsResponse.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'number', example: 'number' }),
    __metadata("design:type", Number)
], JobsResponse.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'array',
        items: {
            type: 'array',
            example: {
                _id: "id",
                title: "string",
                companyName: "string",
                location: "string",
                via: "string",
                description: "string",
                thumbnail: "string",
                applyLink: "string",
                postedAt: "string",
                scheduleType: "string",
                responsibilities: ["str1", "str2"],
                qualifications: ["str1", "str2"],
                workFromHome: true,
                salary: "string",
                applyLinkTitle: "string",
            }
        },
    }),
    __metadata("design:type", Array)
], JobsResponse.prototype, "result", void 0);
exports.JobsResponse = JobsResponse;
//# sourceMappingURL=update-job.dto.js.map