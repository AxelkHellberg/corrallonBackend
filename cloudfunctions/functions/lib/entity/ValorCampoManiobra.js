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
const CampoManiobra_1 = require("./CampoManiobra");
const GuiaManiobra_1 = require("./GuiaManiobra");
let ValorCampoManiobra = class ValorCampoManiobra extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.valor == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.NAME_MANDATORY, msg_1.Msg.NAME_MANDATORY, 400);
        if (this.guiaManiobraId == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("guiaManiobraId"), msg_1.Msg.CAMPO_OBLIGATORIO("guiaManiobraId"), 400);
        if (this.campoManiobraId == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("campoManiobraId"), msg_1.Msg.CAMPO_OBLIGATORIO("campoManiobraId"), 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ValorCampoManiobra.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], ValorCampoManiobra.prototype, "valor", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], ValorCampoManiobra.prototype, "valorNormal", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ValorCampoManiobra.prototype, "guiaManiobraId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => GuiaManiobra_1.GuiaManiobra, guiaManiobra => guiaManiobra.valoresCamposManiobras),
    typeorm_1.JoinColumn({ name: "guiaManiobraId" }),
    typeorm_1.Index(),
    __metadata("design:type", GuiaManiobra_1.GuiaManiobra)
], ValorCampoManiobra.prototype, "guiaManiobra", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ValorCampoManiobra.prototype, "campoManiobraId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => CampoManiobra_1.CampoManiobra, campoManiobra => campoManiobra.valoresCamposManiobras),
    typeorm_1.JoinColumn({ name: "campoManiobraId" }),
    typeorm_1.Index(),
    __metadata("design:type", CampoManiobra_1.CampoManiobra)
], ValorCampoManiobra.prototype, "campoManiobra", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ValorCampoManiobra.prototype, "validateInsert", null);
ValorCampoManiobra = __decorate([
    typeorm_1.Entity()
], ValorCampoManiobra);
exports.ValorCampoManiobra = ValorCampoManiobra;
//# sourceMappingURL=ValorCampoManiobra.js.map