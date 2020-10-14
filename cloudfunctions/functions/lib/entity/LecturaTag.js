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
const Tag_1 = require("./Tag");
const Ronda_1 = require("./Ronda");
let LecturaTag = class LecturaTag extends GenericEntity_1.GenericEntity {
    validateInsert() {
        if (this.tagId == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("tagId"), Msg_1.Msg.CAMPO_OBLIGATORIO("tagId"), 400);
        if (this.rondaId == null)
            throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("rondaId"), Msg_1.Msg.CAMPO_OBLIGATORIO("rondaId"), 400);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LecturaTag.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], LecturaTag.prototype, "tagId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Tag_1.Tag, tag => tag.lecturasTags, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "tagId" }),
    __metadata("design:type", Tag_1.Tag)
], LecturaTag.prototype, "tag", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], LecturaTag.prototype, "rondaId", void 0);
__decorate([
    typeorm_1.ManyToOne(type => Ronda_1.Ronda, ronda => ronda.lecturasTags, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: "rondaId" }),
    __metadata("design:type", Ronda_1.Ronda)
], LecturaTag.prototype, "ronda", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LecturaTag.prototype, "validateInsert", null);
LecturaTag = __decorate([
    typeorm_1.Entity()
], LecturaTag);
exports.LecturaTag = LecturaTag;
//# sourceMappingURL=LecturaTag.js.map