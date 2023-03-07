"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QualificationModule = void 0;
const common_1 = require("@nestjs/common");
const qualifications_service_1 = require("./qualifications.service");
const qualifications_controller_1 = require("./qualifications.controller");
const qualifications_entity_1 = require("./entities/qualifications.entity");
const typeorm_1 = require("@nestjs/typeorm");
let QualificationModule = class QualificationModule {
};
QualificationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([qualifications_entity_1.Qualifications])],
        controllers: [qualifications_controller_1.QualificationController],
        providers: [qualifications_service_1.QualificationService]
    })
], QualificationModule);
exports.QualificationModule = QualificationModule;
//# sourceMappingURL=qualifications.module.js.map