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
exports.Projects = void 0;
const typeorm_1 = require("typeorm");
const experience_entity_1 = require("./experience.entity");
let Projects = class Projects {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Projects.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projects.prototype, "usedSkills", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projects.prototype, "projectName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Projects.prototype, "teamSize", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => experience_entity_1.Experience, (user) => user.projects),
    __metadata("design:type", experience_entity_1.Experience)
], Projects.prototype, "res", void 0);
Projects = __decorate([
    (0, typeorm_1.Entity)('projects')
], Projects);
exports.Projects = Projects;
//# sourceMappingURL=projects.entity.js.map