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
const PlantillaRonda_1 = require("./PlantillaRonda");
let Horario = class Horario extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.hora == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("hora"), msg_1.Msg.CAMPO_OBLIGATORIO("hora"), 400);
        if (this.minuto == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("minuto"), msg_1.Msg.CAMPO_OBLIGATORIO("minuto"), 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Horario.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Horario.prototype, "hora", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Horario.prototype, "minuto", void 0);
__decorate([
    typeorm_1.OneToMany(type => PlantillaRonda_1.PlantillaRonda, plantillaRonda => plantillaRonda.horario),
    __metadata("design:type", Array)
], Horario.prototype, "plantillasRonda", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Horario.prototype, "validateInsert", null);
Horario = __decorate([
    typeorm_1.Entity()
], Horario);
exports.Horario = Horario;
//# sourceMappingURL=Horario.js.map