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
exports.Profile = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const PermissionWS_1 = require("./PermissionWS");
const Report_1 = require("./Report");
let encriptutils = require('../components/encryputils');
let Profile = class Profile extends GenericEntity_1.GenericEntity {
};
Profile.ID_ADMIN = 1;
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Profile.prototype, "name", void 0);
__decorate([
    typeorm_1.ManyToMany(type => PermissionWS_1.PermissionWS, permissionsws => permissionsws.profiles, { onDelete: 'CASCADE' }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Profile.prototype, "permissionsWS", void 0);
__decorate([
    typeorm_1.ManyToMany(type => Report_1.Report, report => report.allowedProfiles, { onDelete: 'CASCADE' }),
    typeorm_1.JoinTable({ name: "permissionReport" }),
    __metadata("design:type", Array)
], Profile.prototype, "reportAvailable", void 0);
Profile = __decorate([
    typeorm_1.Entity()
], Profile);
exports.Profile = Profile;
//# sourceMappingURL=Profile.js.map