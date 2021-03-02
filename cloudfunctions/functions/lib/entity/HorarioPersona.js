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
exports.HorarioPersona = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const Horario_1 = require("./Horario");
let HorarioPersona = class HorarioPersona extends GenericEntity_1.GenericEntity {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], HorarioPersona.prototype, "userId", void 0);
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], HorarioPersona.prototype, "horarioId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Horario_1.Horario, horario => horario.id),
    typeorm_1.JoinColumn({ name: "horarioId" }),
    __metadata("design:type", Horario_1.Horario)
], HorarioPersona.prototype, "horario", void 0);
HorarioPersona = __decorate([
    typeorm_1.Entity()
], HorarioPersona);
exports.HorarioPersona = HorarioPersona;
//# sourceMappingURL=HorarioPersona.js.map