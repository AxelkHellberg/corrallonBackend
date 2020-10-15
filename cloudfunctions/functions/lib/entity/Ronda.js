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
exports.Ronda = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const User_1 = require("./User");
const EstadoRonda_1 = require("./EstadoRonda");
const PlantillaRonda_1 = require("./PlantillaRonda");
const ValorCampoRonda_1 = require("./ValorCampoRonda");
const LecturaTag_1 = require("./LecturaTag");
let encriptutils = require('../components/encryputils');
let Ronda = class Ronda extends GenericEntity_1.GenericEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Ronda.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "float", precision: 5, scale: 2 }),
    __metadata("design:type", Number)
], Ronda.prototype, "porcentaje", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Ronda.prototype, "tiempoRondaMinutos", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Ronda.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Ronda.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.User, user => user.rondas, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "userId" }),
    __metadata("design:type", User_1.User)
], Ronda.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Ronda.prototype, "estadoRondaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => EstadoRonda_1.EstadoRonda, estadoRonda => estadoRonda.rondas, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "estadoRondaId" }),
    __metadata("design:type", EstadoRonda_1.EstadoRonda)
], Ronda.prototype, "estadoRonda", void 0);
__decorate([
    typeorm_1.OneToMany(type => ValorCampoRonda_1.ValorCampoRonda, valorCampoRonda => valorCampoRonda.ronda),
    __metadata("design:type", Array)
], Ronda.prototype, "ronda", void 0);
__decorate([
    typeorm_1.OneToMany(type => LecturaTag_1.LecturaTag, lecturaTag => lecturaTag.ronda),
    __metadata("design:type", Array)
], Ronda.prototype, "lecturasTags", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Ronda.prototype, "plantillaRondaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => PlantillaRonda_1.PlantillaRonda, plantillaRonda => plantillaRonda.rondas, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "plantillaRondaId" }),
    __metadata("design:type", PlantillaRonda_1.PlantillaRonda)
], Ronda.prototype, "plantillaRonda", void 0);
__decorate([
    typeorm_1.OneToMany(type => ValorCampoRonda_1.ValorCampoRonda, valorCampoRonda => valorCampoRonda.ronda),
    __metadata("design:type", Array)
], Ronda.prototype, "valoresCamposRonda", void 0);
Ronda = __decorate([
    typeorm_1.Entity()
], Ronda);
exports.Ronda = Ronda;
//# sourceMappingURL=Ronda.js.map