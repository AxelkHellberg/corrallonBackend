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
const Equipamiento_1 = require("./Equipamiento");
const ErrorVDF_1 = require("../components/ErrorVDF");
const msg_1 = require("../msg/msg");
const LecturaTag_1 = require("./LecturaTag");
let Tag = class Tag extends GenericEntity_1.GenericEntity {
    constructor() {
        super(...arguments);
        this.obligatorio = false;
    }
    validateInsert() {
        if (this.nombre == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.NAME_MANDATORY, msg_1.Msg.NAME_MANDATORY, 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Tag.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Tag.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Tag.prototype, "obligatorio", void 0);
__decorate([
    typeorm_1.OneToMany(type => Equipamiento_1.Equipamiento, equipamiento => equipamiento.tag),
    __metadata("design:type", Array)
], Tag.prototype, "equipamientos", void 0);
__decorate([
    typeorm_1.OneToMany(type => Sistema_1.Sistema, sistema => sistema.tag),
    __metadata("design:type", Array)
], Tag.prototype, "sistemas", void 0);
__decorate([
    typeorm_1.OneToMany(type => LecturaTag_1.LecturaTag, lecturaTag => lecturaTag.tag),
    __metadata("design:type", Array)
], Tag.prototype, "lecturasTags", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tag.prototype, "validateInsert", null);
Tag = __decorate([
    typeorm_1.Entity()
], Tag);
exports.Tag = Tag;
//# sourceMappingURL=Tag.js.map