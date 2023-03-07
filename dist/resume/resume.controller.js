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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeController = void 0;
const common_1 = require("@nestjs/common");
const resume_service_1 = require("./resume.service");
const create_resume_dto_1 = require("./dto/create-resume.dto");
const update_resume_dto_1 = require("./dto/update-resume.dto");
const swagger_1 = require("@nestjs/swagger");
const common_2 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
let ResumeController = class ResumeController {
    constructor(resumeService) {
        this.resumeService = resumeService;
    }
    create(createResumeDto) {
        return this.resumeService.create(createResumeDto);
    }
    findAll() {
        return this.resumeService.findAll();
    }
    findOne(id) {
        return this.resumeService.findOne(id);
    }
    update(id, updateResumeDto) {
        return this.resumeService.update(+id, updateResumeDto);
    }
    remove(id) {
        return this.resumeService.remove(+id);
    }
    uploadFile(body, file) {
        console.log("here", body, file);
        return this.resumeService.uploadResume({ id: body.id, file: file.filename });
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiExtraModels)(create_resume_dto_1.CreateResumeDto),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_resume_dto_1.CreateResumeDto]),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_resume_dto_1.UpdateResumeDto]),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ResumeController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('upload'),
    (0, common_2.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Date.now();
                cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_2.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ResumeController.prototype, "uploadFile", null);
ResumeController = __decorate([
    (0, swagger_1.ApiTags)('Resume'),
    (0, common_1.Controller)('resume'),
    __metadata("design:paramtypes", [resume_service_1.ResumeService])
], ResumeController);
exports.ResumeController = ResumeController;
//# sourceMappingURL=resume.controller.js.map