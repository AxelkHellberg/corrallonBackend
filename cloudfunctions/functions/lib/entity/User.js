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
const ErrorVDF_1 = require("../components/ErrorVDF");
const msg_1 = require("../msg/msg");
const Profile_1 = require("./Profile");
let encriptutils = require('../components/encryputils');
let User = class User extends GenericEntity_1.GenericEntity {
    constructor() {
        super(...arguments);
        this.username = null;
        this.password = null;
        this.profileId = null;
    }
    validateInsert() {
        if (this.password == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.PASSWORD_MANDATORY, msg_1.Msg.PASSWORD_MANDATORY, 400);
        if (this.username == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.USERNAME_MANDATORY, msg_1.Msg.USERNAME_MANDATORY, 400);
        if (this.name == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.NAME_MANDATORY, msg_1.Msg.NAME_MANDATORY, 400);
        if (this.dni == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.DNI_MANDATORY, msg_1.Msg.DNI_MANDATORY, 400);
    }
    encryptPassword() {
        this.password = encriptutils.encrypt(this.password);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "fileNumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], User.prototype, "dni", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    typeorm_1.Column({
        nullable: false
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], User.prototype, "profileId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Profile_1.Profile, profile => profile.users),
    typeorm_1.JoinColumn({ name: "profileId" }),
    typeorm_1.Index(),
    __metadata("design:type", Profile_1.Profile)
], User.prototype, "profile", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "validateInsert", null);
__decorate([
    typeorm_1.BeforeInsert(),
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "encryptPassword", null);
User = __decorate([
    typeorm_1.Entity()
], User);
exports.User = User;
//# sourceMappingURL=User.js.map