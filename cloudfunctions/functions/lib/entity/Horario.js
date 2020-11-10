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
exports.Horario = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const PlantillaRonda_1 = require("./PlantillaRonda");
const HorarioPersona_1 = require("./HorarioPersona");
let Horario = class Horario extends GenericEntity_1.GenericEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Horario.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Horario.prototype, "dias", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Horario.prototype, "tipoRecurrencia", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Horario.prototype, "horaInicio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Horario.prototype, "horaFin", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Horario.prototype, "fechaInicio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Horario.prototype, "fechaFin", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Horario.prototype, "plantillaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => PlantillaRonda_1.PlantillaRonda, plantillaRonda => plantillaRonda.horariosRecurrentes),
    typeorm_1.JoinColumn({ name: "plantillaId" }),
    __metadata("design:type", PlantillaRonda_1.PlantillaRonda)
], Horario.prototype, "plantilla", void 0);
__decorate([
    typeorm_1.OneToMany(type => HorarioPersona_1.HorarioPersona, horarioPersona => horarioPersona.horario),
    __metadata("design:type", Array)
], Horario.prototype, "horarioPersona", void 0);
Horario = __decorate([
    typeorm_1.Entity()
], Horario);
exports.Horario = Horario;
//# sourceMappingURL=Horario.js.map