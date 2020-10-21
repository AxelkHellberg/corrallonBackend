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
exports.CampoRondaPlantillaRonda = void 0;
const typeorm_1 = require("typeorm");
const GenericEntity_1 = require("./GenericEntity");
const CampoRonda_1 = require("./CampoRonda");
const PlantillaRonda_1 = require("./PlantillaRonda");
let CampoRondaPlantillaRonda = class CampoRondaPlantillaRonda extends GenericEntity_1.GenericEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CampoRondaPlantillaRonda.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CampoRondaPlantillaRonda.prototype, "campoRondaId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CampoRondaPlantillaRonda.prototype, "plantillaRondaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => CampoRonda_1.CampoRonda, campoRonda => campoRonda.id),
    typeorm_1.JoinColumn({ name: "campoRondaId" }),
    __metadata("design:type", CampoRonda_1.CampoRonda)
], CampoRondaPlantillaRonda.prototype, "campoRonda", void 0);
__decorate([
    typeorm_1.ManyToOne(type => PlantillaRonda_1.PlantillaRonda, plantillaRonda => plantillaRonda.id),
    typeorm_1.JoinColumn({ name: "plantillaRondaId" }),
    __metadata("design:type", PlantillaRonda_1.PlantillaRonda)
], CampoRondaPlantillaRonda.prototype, "plantillaRonda", void 0);
CampoRondaPlantillaRonda = __decorate([
    typeorm_1.Entity()
], CampoRondaPlantillaRonda);
exports.CampoRondaPlantillaRonda = CampoRondaPlantillaRonda;
//# sourceMappingURL=CampoRondaPlantillaRonda.js.map