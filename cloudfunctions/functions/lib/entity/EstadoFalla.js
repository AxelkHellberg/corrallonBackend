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
exports.EstadoFalla = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const ErrorVDF_1 = require("../components/ErrorVDF");
const Msg_1 = require("../msg/Msg");
const HistorialEstadoFalla_1 = require("./HistorialEstadoFalla");
const NotificacionFalla_1 = require("./NotificacionFalla");
let EstadoFalla = class EstadoFalla extends GenericEntity_1.GenericEntity {
    constructor() {
        super(...arguments);
        this.posicion = null;
        this.color = null;
    }
    validateInsert() {
        if (this.nombre == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.NAME_MANDATORY, Msg_1.Msg.NAME_MANDATORY, 400);
    }
    validateRemove() {
        if (this.id == 1 || this.id == 2)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.ESTADOS_FALLA_NO_BORRABLES, Msg_1.Msg.ESTADOS_FALLA_NO_BORRABLES, 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], EstadoFalla.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], EstadoFalla.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], EstadoFalla.prototype, "posicion", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], EstadoFalla.prototype, "color", void 0);
__decorate([
    typeorm_1.OneToMany(type => HistorialEstadoFalla_1.HistorialEstadoFalla, historialEstadoFalla => historialEstadoFalla.estadoFalla),
    __metadata("design:type", Array)
], EstadoFalla.prototype, "historialEstadosFallas", void 0);
__decorate([
    typeorm_1.OneToMany(type => NotificacionFalla_1.NotificacionFalla, notificacionFalla => notificacionFalla.estadoFalla),
    __metadata("design:type", Array)
], EstadoFalla.prototype, "notificacionesFalla", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EstadoFalla.prototype, "validateInsert", null);
__decorate([
    typeorm_1.BeforeRemove(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EstadoFalla.prototype, "validateRemove", null);
EstadoFalla = __decorate([
    typeorm_1.Entity()
], EstadoFalla);
exports.EstadoFalla = EstadoFalla;
//# sourceMappingURL=EstadoFalla.js.map