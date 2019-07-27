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
const EstadoFalla_1 = require("./EstadoFalla");
const NotificacionFalla_1 = require("./NotificacionFalla");
let HistorialEstadoFalla = class HistorialEstadoFalla extends GenericEntity_1.GenericEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], HistorialEstadoFalla.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], HistorialEstadoFalla.prototype, "estadoFallaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => EstadoFalla_1.EstadoFalla, estadoFalla => estadoFalla.historialEstadosFallas, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "estadoFallaId" }),
    typeorm_1.Index(),
    __metadata("design:type", EstadoFalla_1.EstadoFalla)
], HistorialEstadoFalla.prototype, "estadoFalla", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], HistorialEstadoFalla.prototype, "notificacionFallaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => NotificacionFalla_1.NotificacionFalla, notificacionFalla => notificacionFalla.historialEstadosFallas, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "notificacionFallaId" }),
    typeorm_1.Index(),
    __metadata("design:type", NotificacionFalla_1.NotificacionFalla)
], HistorialEstadoFalla.prototype, "notificacionFalla", void 0);
HistorialEstadoFalla = __decorate([
    typeorm_1.Entity()
], HistorialEstadoFalla);
exports.HistorialEstadoFalla = HistorialEstadoFalla;
//# sourceMappingURL=HistorialEstadoFalla.js.map