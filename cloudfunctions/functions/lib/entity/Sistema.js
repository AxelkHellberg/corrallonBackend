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
const Planta_1 = require("./Planta");
const ErrorVDF_1 = require("../components/ErrorVDF");
const msg_1 = require("../msg/msg");
const Equipamiento_1 = require("./Equipamiento");
const Tag_1 = require("./Tag");
const CampoManiobra_1 = require("./CampoManiobra");
const FallaSistema_1 = require("./FallaSistema");
const TipoSistema_1 = require("./TipoSistema");
let Sistema = class Sistema extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.nombre == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.NAME_MANDATORY, msg_1.Msg.NAME_MANDATORY, 400);
        if (this.plantaId == null)
            throw new ErrorVDF_1.ErrorVDF(msg_1.Msg.PLANTA_MANDATORY, msg_1.Msg.PLANTA_MANDATORY, 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Sistema.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Sistema.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Sistema.prototype, "descripcion", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Sistema.prototype, "KKS", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Sistema.prototype, "plantaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Planta_1.Planta, planta => planta.sistemas, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "plantaId" }),
    __metadata("design:type", Planta_1.Planta)
], Sistema.prototype, "planta", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Sistema.prototype, "tipoSistemaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => TipoSistema_1.TipoSistema, tipoSistema => tipoSistema.sistemas, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "tipoSistemaId" }),
    __metadata("design:type", TipoSistema_1.TipoSistema)
], Sistema.prototype, "tipoSistema", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Sistema.prototype, "tagId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Tag_1.Tag, tag => tag.sistemas, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "tagId" }),
    __metadata("design:type", Tag_1.Tag)
], Sistema.prototype, "tag", void 0);
__decorate([
    typeorm_1.OneToMany(type => Equipamiento_1.Equipamiento, equipamiento => equipamiento.sistema),
    __metadata("design:type", Array)
], Sistema.prototype, "equipamientos", void 0);
__decorate([
    typeorm_1.OneToMany(type => CampoManiobra_1.CampoManiobra, campoManiobra => campoManiobra.sistema),
    __metadata("design:type", Array)
], Sistema.prototype, "camposManiobras", void 0);
__decorate([
    typeorm_1.OneToMany(type => FallaSistema_1.FallaSistema, fallaSistema => fallaSistema.sistema),
    __metadata("design:type", Array)
], Sistema.prototype, "fallasSistema", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Sistema.prototype, "validateInsert", null);
Sistema = __decorate([
    typeorm_1.Entity()
], Sistema);
exports.Sistema = Sistema;
//# sourceMappingURL=Sistema.js.map