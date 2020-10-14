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
const Msg_1 = require("../msg/Msg");
const HistorialEstadoFalla_1 = require("./HistorialEstadoFalla");
const FallaEquipamiento_1 = require("./FallaEquipamiento");
const FallaSistema_1 = require("./FallaSistema");
const EstadoFalla_1 = require("./EstadoFalla");
const TipoFalla_1 = require("./TipoFalla");
const ValorCampoManiobra_1 = require("./ValorCampoManiobra");
const ValorCampoRonda_1 = require("./ValorCampoRonda");
let NotificacionFalla = class NotificacionFalla extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.descripcion == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("descripcion"), Msg_1.Msg.CAMPO_OBLIGATORIO("descripcion"), 400);
        if (this.descripcion.length < 10)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.reemplazarCampos(Msg_1.Msg.CAMPO_CARACTERES_MINIMOS, ["descripcion", 10]), Msg_1.Msg.reemplazarCampos(Msg_1.Msg.CAMPO_CARACTERES_MINIMOS, ["descripcion", 10]));
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], NotificacionFalla.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], NotificacionFalla.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.OneToMany(type => HistorialEstadoFalla_1.HistorialEstadoFalla, historialEstadoFalla => historialEstadoFalla.notificacionFalla),
    __metadata("design:type", Array)
], NotificacionFalla.prototype, "historialEstadosFallas", void 0);
__decorate([
    typeorm_1.OneToMany(type => FallaEquipamiento_1.FallaEquipamiento, fallaEquipamiento => fallaEquipamiento.notificacionFalla),
    __metadata("design:type", Array)
], NotificacionFalla.prototype, "fallasEquipamiento", void 0);
__decorate([
    typeorm_1.OneToMany(type => FallaSistema_1.FallaSistema, fallaSistema => fallaSistema.notificacionFalla),
    __metadata("design:type", Array)
], NotificacionFalla.prototype, "fallasSistema", void 0);
__decorate([
    typeorm_1.OneToMany(type => ValorCampoManiobra_1.ValorCampoManiobra, valorCampoManiobra => valorCampoManiobra.notificacionFalla),
    __metadata("design:type", Array)
], NotificacionFalla.prototype, "valoresCamposManiobras", void 0);
__decorate([
    typeorm_1.OneToMany(type => ValorCampoRonda_1.ValorCampoRonda, valoresCamposRonda => valoresCamposRonda.notificacionFalla),
    __metadata("design:type", Array)
], NotificacionFalla.prototype, "valoresCamposRonda", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], NotificacionFalla.prototype, "estadoFallaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => EstadoFalla_1.EstadoFalla, estadoFalla => estadoFalla.notificacionesFalla, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "estadoFallaId" }),
    typeorm_1.Index(),
    __metadata("design:type", EstadoFalla_1.EstadoFalla)
], NotificacionFalla.prototype, "estadoFalla", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], NotificacionFalla.prototype, "tipoFallaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => TipoFalla_1.TipoFalla, tipoFalla => tipoFalla.notificacionesFalla, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "tipoFallaId" }),
    typeorm_1.Index(),
    __metadata("design:type", TipoFalla_1.TipoFalla)
], NotificacionFalla.prototype, "tipoFalla", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotificacionFalla.prototype, "validateInsert", null);
NotificacionFalla = __decorate([
    typeorm_1.Entity()
], NotificacionFalla);
exports.NotificacionFalla = NotificacionFalla;
//# sourceMappingURL=NotificacionFalla.js.map