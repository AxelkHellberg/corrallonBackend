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
const CampoRonda_1 = require("./CampoRonda");
const Horario_1 = require("./Horario");
const Ronda_1 = require("./Ronda");
let PlantillaRonda = class PlantillaRonda extends GenericEntity_1.GenericEntity {
    constructor() {
        super(...arguments);
        this.funcionamientoSistema = true;
        this.obligatorioSistema = false;
        this.funcionamientoEquipo = true;
        this.obligatorioEquipo = false;
    }
    validateInsert() {
        if (this.nombre == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.NAME_MANDATORY, msg_1.Msg.NAME_MANDATORY, 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PlantillaRonda.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PlantillaRonda.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], PlantillaRonda.prototype, "funcionamientoSistema", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], PlantillaRonda.prototype, "obligatorioSistema", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], PlantillaRonda.prototype, "funcionamientoEquipo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], PlantillaRonda.prototype, "obligatorioEquipo", void 0);
__decorate([
    typeorm_1.OneToMany(type => CampoRonda_1.CampoRonda, campoRonda => campoRonda.plantillaRonda),
    __metadata("design:type", Array)
], PlantillaRonda.prototype, "camposRonda", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], PlantillaRonda.prototype, "horarioId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Horario_1.Horario, horario => horario.plantillasRonda),
    typeorm_1.JoinColumn({ name: "horarioId" }),
    __metadata("design:type", Horario_1.Horario)
], PlantillaRonda.prototype, "horario", void 0);
__decorate([
    typeorm_1.OneToMany(type => Ronda_1.Ronda, ronda => ronda.plantillaRonda),
    __metadata("design:type", Array)
], PlantillaRonda.prototype, "rondas", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlantillaRonda.prototype, "validateInsert", null);
PlantillaRonda = __decorate([
    typeorm_1.Entity()
], PlantillaRonda);
exports.PlantillaRonda = PlantillaRonda;
//# sourceMappingURL=PlantillaRonda.js.map