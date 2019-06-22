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
const Sistema_1 = require("./Sistema");
const msg_1 = require("../msg/msg");
const ErrorVDF_1 = require("../components/ErrorVDF");
const Tag_1 = require("./Tag");
let Equipamiento = class Equipamiento extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.nombre == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.NAME_MANDATORY, msg_1.Msg.NAME_MANDATORY, 400);
        if (this.sistemaId == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.SISTEMA_MANDATORY, msg_1.Msg.SISTEMA_MANDATORY, 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Equipamiento.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Equipamiento.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Equipamiento.prototype, "detalle", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Equipamiento.prototype, "sistemaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Sistema_1.Sistema, sistema => sistema.equipamientos),
    typeorm_1.JoinColumn({ name: "sistemaId" }),
    __metadata("design:type", Sistema_1.Sistema)
], Equipamiento.prototype, "sistema", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Equipamiento.prototype, "tagId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Tag_1.Tag, tag => tag.equipamientos),
    typeorm_1.JoinColumn({ name: "tagId" }),
    __metadata("design:type", Tag_1.Tag)
], Equipamiento.prototype, "tag", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Equipamiento.prototype, "validateInsert", null);
Equipamiento = __decorate([
    typeorm_1.Entity()
], Equipamiento);
exports.Equipamiento = Equipamiento;
//# sourceMappingURL=Equipamiento.js.map