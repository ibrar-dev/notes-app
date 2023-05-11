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
exports.CreateJobDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateJobDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "companyName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "via", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "thumbnail", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "applyLink", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "postedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "scheduleType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'array',
        items: {
            type: 'string',
            example: ["str1", "str2", "str3"]
        },
    }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "responsibilities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'array',
        items: {
            type: 'string',
            example: ["str1", "str2", "str3"]
        },
    }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "qualifications", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Boolean)
], CreateJobDto.prototype, "workFromHome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "salary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "applyLinkTitle", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'string' }),
    __metadata("design:type", String)
], CreateJobDto.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'DateTime' }),
    __metadata("design:type", Object)
], CreateJobDto.prototype, "postedDate", void 0);
exports.CreateJobDto = CreateJobDto;
//# sourceMappingURL=create-job.dto.js.map