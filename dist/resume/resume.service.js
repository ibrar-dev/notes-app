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
exports.ResumeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const resume_entity_1 = require("./entities/resume.entity");
var fs = require('fs');
let ResumeService = class ResumeService {
    constructor(resumeRepository) {
        this.resumeRepository = resumeRepository;
    }
    async create(createResumeDto) {
        try {
            let newJob = this.resumeRepository.create(Object.assign({}, createResumeDto));
            console.log(newJob);
            let aw = await this.resumeRepository.save(newJob);
            console.log("Reee", aw);
            return aw;
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            let newUser = await this.resumeRepository.find({
                relations: {
                    languages: true,
                    phone: true
                }
            });
            return { result: newUser };
        }
        catch (error) {
            console.log("here", error);
            return error;
        }
    }
    async findOne(id) {
        try {
            const res = await this.resumeRepository.findOne({
                where: {
                    id: id,
                },
                relations: {
                    languages: true,
                    phone: true,
                    email: true,
                    website: true, currentSalary: true
                }
            });
            return { result: res };
        }
        catch (error) {
            console.log("here", error);
            return error;
        }
    }
    update(id, updateResumeDto) {
        return `This action updates a #${id} resume`;
    }
    remove(id) {
        return `This action removes a #${id} resume`;
    }
    async uploadResume(res) {
        console.log(res);
        let data = fs.readFileSync(`./uploads/` + res.file);
        console.log(data.toString('base64'));
        return data.toString('base64');
    }
};
ResumeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(resume_entity_1.Resume)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ResumeService);
exports.ResumeService = ResumeService;
//# sourceMappingURL=resume.service.js.map