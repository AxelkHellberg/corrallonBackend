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
exports.JoinReport = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const Report_1 = require("./Report");
const JoinType_1 = require("./JoinType");
let JoinReport = class JoinReport extends GenericEntity_1.GenericEntity {
    constructor() {
        super(...arguments);
        this.joinWhere = null;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], JoinReport.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], JoinReport.prototype, "joinColumn", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], JoinReport.prototype, "joinAlias", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], JoinReport.prototype, "joinWhere", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], JoinReport.prototype, "reportId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Report_1.Report, report => report.joinsReport, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "reportId" }),
    typeorm_1.Index(),
    __metadata("design:type", Report_1.Report)
], JoinReport.prototype, "report", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], JoinReport.prototype, "joinTypeId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => JoinType_1.JoinType, joinType => joinType.joinReports, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "joinTypeId" }),
    typeorm_1.Index(),
    __metadata("design:type", JoinType_1.JoinType)
], JoinReport.prototype, "joinType", void 0);
JoinReport = __decorate([
    typeorm_1.Entity()
], JoinReport);
exports.JoinReport = JoinReport;
//# sourceMappingURL=JoinReport.js.map