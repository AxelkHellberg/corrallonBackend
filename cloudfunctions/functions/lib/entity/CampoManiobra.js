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
exports.CampoManiobra = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const Sistema_1 = require("./Sistema");
const PlantillaGuiaManiobra_1 = require("./PlantillaGuiaManiobra");
const Msg_1 = require("../msg/Msg");
const ErrorVDF_1 = require("../components/ErrorVDF");
const ValorCampoManiobra_1 = require("./ValorCampoManiobra");
let CampoManiobra = class CampoManiobra extends GenericEntity_1.GenericEntity {
    constructor() {
        super(...arguments);
        this.valorNormal = true;
    }
    validateInsert() {
        if (this.sistemaId == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("sistemaId"), Msg_1.Msg.CAMPO_OBLIGATORIO("sistemaId"), 400);
        if (this.plantillaGuiaManiobraId == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("plantillaGuiaManiobraId"), Msg_1.Msg.CAMPO_OBLIGATORIO("plantillaGuiaManiobraId"), 400);
        if (this.nombre == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("name"), Msg_1.Msg.CAMPO_OBLIGATORIO("name"), 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CampoManiobra.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CampoManiobra.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ type: "text" }),
    __metadata("design:type", Object)
], CampoManiobra.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], CampoManiobra.prototype, "valorNormal", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CampoManiobra.prototype, "sistemaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Sistema_1.Sistema, sistema => sistema.camposManiobras, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "sistemaId" }),
    __metadata("design:type", Sistema_1.Sistema)
], CampoManiobra.prototype, "sistema", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CampoManiobra.prototype, "plantillaGuiaManiobraId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => PlantillaGuiaManiobra_1.PlantillaGuiaManiobra, plantillaGuiaManiobra => plantillaGuiaManiobra.camposManiobras, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "plantillaGuiaManiobraId" }),
    __metadata("design:type", PlantillaGuiaManiobra_1.PlantillaGuiaManiobra)
], CampoManiobra.prototype, "plantillaGuiaManiobra", void 0);
__decorate([
    typeorm_1.OneToMany(type => ValorCampoManiobra_1.ValorCampoManiobra, valoresCamposManiobras => valoresCamposManiobras.campoManiobra),
    __metadata("design:type", Array)
], CampoManiobra.prototype, "valoresCamposManiobras", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CampoManiobra.prototype, "validateInsert", null);
CampoManiobra = __decorate([
    typeorm_1.Entity()
], CampoManiobra);
exports.CampoManiobra = CampoManiobra;
//# sourceMappingURL=CampoManiobra.js.map