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
exports.Report = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const Profile_1 = require("./Profile");
const JoinReport_1 = require("./JoinReport");
let encriptutils = require('../components/encryputils');
let Report = class Report extends GenericEntity_1.GenericEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Report.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Report.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Report.prototype, "from", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Report.prototype, "where", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Report.prototype, "entityAlias", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Report.prototype, "select", void 0);
__decorate([
    typeorm_1.OneToMany(type => JoinReport_1.JoinReport, joinReport => joinReport.report),
    __metadata("design:type", Array)
], Report.prototype, "joinsReport", void 0);
__decorate([
    typeorm_1.ManyToMany(type => Profile_1.Profile, profile => profile.reportAvailable, { onDelete: 'CASCADE' }),
    __metadata("design:type", Array)
], Report.prototype, "allowedProfiles", void 0);
Report = __decorate([
    typeorm_1.Entity()
], Report);
exports.Report = Report;
//# sourceMappingURL=Report.js.map