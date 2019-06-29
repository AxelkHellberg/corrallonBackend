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
const HistorialEstadoFalla_1 = require("./HistorialEstadoFalla");
let NotificacionFalla = class NotificacionFalla extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.descripcion == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("descripcion"), msg_1.Msg.CAMPO_OBLIGATORIO("descripcion"), 400);
        if (this.descripcion.length < 10)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.reemplazarCampos(msg_1.Msg.CAMPO_CARACTERES_MINIMOS, ["descripcion", 10]), msg_1.Msg.reemplazarCampos(msg_1.Msg.CAMPO_CARACTERES_MINIMOS, ["descripcion", 10]));
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