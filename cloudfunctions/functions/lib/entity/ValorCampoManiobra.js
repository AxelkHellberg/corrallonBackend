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
exports.ValorCampoManiobra = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const ErrorVDF_1 = require("../components/ErrorVDF");
const Msg_1 = require("../msg/Msg");
const CampoManiobra_1 = require("./CampoManiobra");
const GuiaManiobra_1 = require("./GuiaManiobra");
const NotificacionFalla_1 = require("./NotificacionFalla");
let ValorCampoManiobra = class ValorCampoManiobra extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.valor == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.NAME_MANDATORY, Msg_1.Msg.NAME_MANDATORY, 400);
        if (this.guiaManiobraId == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("guiaManiobraId"), Msg_1.Msg.CAMPO_OBLIGATORIO("guiaManiobraId"), 400);
        if (this.campoManiobraId == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("campoManiobraId"), Msg_1.Msg.CAMPO_OBLIGATORIO("campoManiobraId"), 400);
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
    typeorm_1.ManyToOne(type => GuiaManiobra_1.GuiaManiobra, guiaManiobra => guiaManiobra.valoresCamposManiobras, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "guiaManiobraId" }),
    typeorm_1.Index(),
    __metadata("design:type", GuiaManiobra_1.GuiaManiobra)
], ValorCampoManiobra.prototype, "guiaManiobra", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], ValorCampoManiobra.prototype, "notificacionFallaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => NotificacionFalla_1.NotificacionFalla, notificacionFalla => notificacionFalla.valoresCamposManiobras, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "notificacionFallaId" }),
    typeorm_1.Index(),
    __metadata("design:type", NotificacionFalla_1.NotificacionFalla)
], ValorCampoManiobra.prototype, "notificacionFalla", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ValorCampoManiobra.prototype, "campoManiobraId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => CampoManiobra_1.CampoManiobra, campoManiobra => campoManiobra.valoresCamposManiobras, { onDelete: 'CASCADE' }),
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