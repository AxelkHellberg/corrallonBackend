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
exports.FallaEquipamiento = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const Equipamiento_1 = require("./Equipamiento");
const NotificacionFalla_1 = require("./NotificacionFalla");
let FallaEquipamiento = class FallaEquipamiento extends GenericEntity_1.GenericEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FallaEquipamiento.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], FallaEquipamiento.prototype, "equipamientoId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Equipamiento_1.Equipamiento, equipamiento => equipamiento.fallasEquipamiento, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "equipamientoId" }),
    typeorm_1.Index(),
    __metadata("design:type", Equipamiento_1.Equipamiento)
], FallaEquipamiento.prototype, "equipamiento", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], FallaEquipamiento.prototype, "notificacionFallaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => NotificacionFalla_1.NotificacionFalla, notificacionFalla => notificacionFalla.fallasEquipamiento, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "notificacionFallaId" }),
    typeorm_1.Index(),
    __metadata("design:type", NotificacionFalla_1.NotificacionFalla)
], FallaEquipamiento.prototype, "notificacionFalla", void 0);
FallaEquipamiento = __decorate([
    typeorm_1.Entity()
], FallaEquipamiento);
exports.FallaEquipamiento = FallaEquipamiento;
//# sourceMappingURL=FallaEquipamiento.js.map