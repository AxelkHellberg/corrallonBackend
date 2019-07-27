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
const msg_1 = require("../msg/msg");
const ErrorVDF_1 = require("../components/ErrorVDF");
const CampoRonda_1 = require("./CampoRonda");
let ListaRonda = class ListaRonda extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.llave == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("llave"), msg_1.Msg.CAMPO_OBLIGATORIO("llave"), 400);
        if (this.valor == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("valor"), msg_1.Msg.CAMPO_OBLIGATORIO("valor"), 400);
        if (this.campoRondaId == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.CAMPO_OBLIGATORIO("campoRondaId"), msg_1.Msg.CAMPO_OBLIGATORIO("campoRondaId"), 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ListaRonda.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], ListaRonda.prototype, "llave", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], ListaRonda.prototype, "valor", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ListaRonda.prototype, "campoRondaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => CampoRonda_1.CampoRonda, campoRonda => campoRonda.listasRonda, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "campoRondaId" }),
    __metadata("design:type", CampoRonda_1.CampoRonda)
], ListaRonda.prototype, "campoRonda", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ListaRonda.prototype, "validateInsert", null);
ListaRonda = __decorate([
    typeorm_1.Entity()
], ListaRonda);
exports.ListaRonda = ListaRonda;
//# sourceMappingURL=ListaRonda.js.map