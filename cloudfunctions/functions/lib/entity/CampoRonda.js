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
exports.CampoRonda = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const Msg_1 = require("../msg/Msg");
const ErrorVDF_1 = require("../components/ErrorVDF");
const Equipamiento_1 = require("./Equipamiento");
const TipoCampoRonda_1 = require("./TipoCampoRonda");
const UnidadMedida_1 = require("./UnidadMedida");
const ListaRonda_1 = require("./ListaRonda");
const PlantillaRonda_1 = require("./PlantillaRonda");
const ValorCampoRonda_1 = require("./ValorCampoRonda");
let CampoRonda = class CampoRonda extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.valorNormal == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("valorNormal"), Msg_1.Msg.CAMPO_OBLIGATORIO("valorNormal"), 400);
        if (this.nombre == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("nombre"), Msg_1.Msg.CAMPO_OBLIGATORIO("nombre"), 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CampoRonda.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: "text" }),
    __metadata("design:type", Object)
], CampoRonda.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CampoRonda.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], CampoRonda.prototype, "valorNormal", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CampoRonda.prototype, "valorMin", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CampoRonda.prototype, "valorMax", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CampoRonda.prototype, "equipamientoId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Equipamiento_1.Equipamiento, equipamiento => equipamiento.camposRonda, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "equipamientoId" }),
    __metadata("design:type", Equipamiento_1.Equipamiento)
], CampoRonda.prototype, "equipamiento", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CampoRonda.prototype, "tipoCampoRondaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => TipoCampoRonda_1.TipoCampoRonda, tipoCampoRondaService => tipoCampoRondaService.camposRonda, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "tipoCampoRondaId" }),
    __metadata("design:type", TipoCampoRonda_1.TipoCampoRonda)
], CampoRonda.prototype, "tipoCampoRonda", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CampoRonda.prototype, "unidadMedidaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => UnidadMedida_1.UnidadMedida, unidadMedida => unidadMedida.camposRonda, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "unidadMedidaId" }),
    __metadata("design:type", UnidadMedida_1.UnidadMedida)
], CampoRonda.prototype, "unidadMedida", void 0);
__decorate([
    typeorm_1.OneToMany(type => ListaRonda_1.ListaRonda, listaRonda => listaRonda.campoRonda),
    __metadata("design:type", Array)
], CampoRonda.prototype, "listasRonda", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CampoRonda.prototype, "plantillaRondaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => PlantillaRonda_1.PlantillaRonda, plantillaRonda => plantillaRonda.camposRonda, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "plantillaRondaId" }),
    __metadata("design:type", PlantillaRonda_1.PlantillaRonda)
], CampoRonda.prototype, "plantillaRonda", void 0);
__decorate([
    typeorm_1.OneToMany(type => ValorCampoRonda_1.ValorCampoRonda, valorCampoRonda => valorCampoRonda.campoRonda),
    __metadata("design:type", Array)
], CampoRonda.prototype, "valoresCamposRonda", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CampoRonda.prototype, "validateInsert", null);
CampoRonda = __decorate([
    typeorm_1.Entity()
], CampoRonda);
exports.CampoRonda = CampoRonda;
//# sourceMappingURL=CampoRonda.js.map