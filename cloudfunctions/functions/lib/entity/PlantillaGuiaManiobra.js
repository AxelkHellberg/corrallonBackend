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
let PlantillaGuiaManiobra = class PlantillaGuiaManiobra extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.nombre == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.NAME_MANDATORY, msg_1.Msg.NAME_MANDATORY, 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PlantillaGuiaManiobra.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], PlantillaGuiaManiobra.prototype, "nombre", void 0);
__decorate([
    typeorm_1.OneToMany(type => CampoManiobra_1.CampoManiobra, campoManiobra => campoManiobra.plantillaGuiaManiobra),
    __metadata("design:type", Array)
], PlantillaGuiaManiobra.prototype, "camposManiobras", void 0);
__decorate([
    typeorm_1.OneToMany(type => GuiaManiobra_1.GuiaManiobra, guiaManiobra => guiaManiobra.plantillaGuiaManiobra),
    __metadata("design:type", Array)
], PlantillaGuiaManiobra.prototype, "guiasManiobras", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlantillaGuiaManiobra.prototype, "validateInsert", null);
PlantillaGuiaManiobra = __decorate([
    typeorm_1.Entity()
], PlantillaGuiaManiobra);
exports.PlantillaGuiaManiobra = PlantillaGuiaManiobra;
//# sourceMappingURL=PlantillaGuiaManiobra.js.map