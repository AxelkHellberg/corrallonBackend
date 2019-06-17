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
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const JoinReport_1 = require("./JoinReport");
let JoinType = class JoinType extends GenericEntity_1.GenericEntity {
};
JoinType.LEFT_JOIN_ID = 1;
JoinType.INNER_JOIN_ID = 2;
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], JoinType.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], JoinType.prototype, "description", void 0);
__decorate([
    typeorm_1.OneToMany(type => JoinReport_1.JoinReport, joinReport => joinReport.joinType),
    __metadata("design:type", Array)
], JoinType.prototype, "joinReports", void 0);
JoinType = __decorate([
    typeorm_1.Entity()
], JoinType);
exports.JoinType = JoinType;
//# sourceMappingURL=JoinType.js.map