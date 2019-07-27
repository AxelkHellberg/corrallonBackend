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
const User_1 = require("./User");
const ErrorVDF_1 = require("../components/ErrorVDF");
const msg_1 = require("../msg/msg");
const ValorCampoManiobra_1 = require("./ValorCampoManiobra");
const PlantillaGuiaManiobra_1 = require("./PlantillaGuiaManiobra");
let GuiaManiobra = class GuiaManiobra extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.userId == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("userId"), msg_1.Msg.CAMPO_OBLIGATORIO("userId"), 400);
        if (this.nombre == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("nombre"), msg_1.Msg.CAMPO_OBLIGATORIO("nombre"), 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], GuiaManiobra.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], GuiaManiobra.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], GuiaManiobra.prototype, "userId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.User, user => user.guiasManiobras, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "userId" }),
    typeorm_1.Index(),
    __metadata("design:type", User_1.User)
], GuiaManiobra.prototype, "user", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], GuiaManiobra.prototype, "plantillaGuiaManiobraId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => PlantillaGuiaManiobra_1.PlantillaGuiaManiobra, plantillaGuiaManiobra => plantillaGuiaManiobra.guiasManiobras, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "plantillaGuiaManiobraId" }),
    typeorm_1.Index(),
    __metadata("design:type", PlantillaGuiaManiobra_1.PlantillaGuiaManiobra)
], GuiaManiobra.prototype, "plantillaGuiaManiobra", void 0);
__decorate([
    typeorm_1.OneToMany(type => ValorCampoManiobra_1.ValorCampoManiobra, valoresCamposManiobras => valoresCamposManiobras.guiaManiobra),
    __metadata("design:type", Array)
], GuiaManiobra.prototype, "valoresCamposManiobras", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GuiaManiobra.prototype, "validateInsert", null);
GuiaManiobra = __decorate([
    typeorm_1.Entity()
], GuiaManiobra);
exports.GuiaManiobra = GuiaManiobra;
//# sourceMappingURL=GuiaManiobra.js.map