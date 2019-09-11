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
const Ronda_1 = require("./Ronda");
const CampoRonda_1 = require("./CampoRonda");
const NotificacionFalla_1 = require("./NotificacionFalla");
let ValorCampoRonda = class ValorCampoRonda extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.valor == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("valor"), msg_1.Msg.CAMPO_OBLIGATORIO("valor"), 400);
        if (this.campoRondaId == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("campoRondaId"), msg_1.Msg.CAMPO_OBLIGATORIO("campoRondaId"), 400);
        if (this.rondaId == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("rondaId"), msg_1.Msg.CAMPO_OBLIGATORIO("rondaId"), 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ValorCampoRonda.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ValorCampoRonda.prototype, "valor", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], ValorCampoRonda.prototype, "valorNormal", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ValorCampoRonda.prototype, "rondaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Ronda_1.Ronda, ronda => ronda.valoresCamposRonda, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "rondaId" }),
    typeorm_1.Index(),
    __metadata("design:type", Ronda_1.Ronda)
], ValorCampoRonda.prototype, "ronda", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ValorCampoRonda.prototype, "campoRondaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => CampoRonda_1.CampoRonda, campoRonda => campoRonda.valoresCamposRonda, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "campoRondaId" }),
    typeorm_1.Index(),
    __metadata("design:type", CampoRonda_1.CampoRonda)
], ValorCampoRonda.prototype, "campoRonda", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], ValorCampoRonda.prototype, "notificacionFallaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => NotificacionFalla_1.NotificacionFalla, notificacionFalla => notificacionFalla.valoresCamposRonda, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "notificacionFallaId" }),
    typeorm_1.Index(),
    __metadata("design:type", NotificacionFalla_1.NotificacionFalla)
], ValorCampoRonda.prototype, "notificacionFalla", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ValorCampoRonda.prototype, "validateInsert", null);
ValorCampoRonda = __decorate([
    typeorm_1.Entity()
], ValorCampoRonda);
exports.ValorCampoRonda = ValorCampoRonda;
//# sourceMappingURL=ValorCampoRonda.js.map