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
exports.Skills = void 0;
const typeorm_1 = require("typeorm");
const resume_entity_1 = require("./resume.entity");
let Skills = class Skills {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Skills.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Skills.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Skills.prototype, "skill", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Skills.prototype, "ontology", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Skills.prototype, "alias", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Skills.prototype, "formattedName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Skills.prototype, "evidence", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Skills.prototype, "lastUsed", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Skills.prototype, "experienceInMonths", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => resume_entity_1.Resume, (user) => user.skills),
    __metadata("design:type", resume_entity_1.Resume)
], Skills.prototype, "res", void 0);
Skills = __decorate([
    (0, typeorm_1.Entity)('skills')
], Skills);
exports.Skills = Skills;
//# sourceMappingURL=skills.entity%20copy.js.map