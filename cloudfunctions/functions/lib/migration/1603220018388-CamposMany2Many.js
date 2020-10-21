"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CamposMany2Many1603220018388 = void 0;
class CamposMany2Many1603220018388 {
    constructor() {
        this.name = 'CamposMany2Many1603220018388';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_d51668d2140bee962e5c7ec2781` FOREIGN KEY (`equipamientoId`) REFERENCES `equipamiento`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_d8de8ca317daa257869679a9a20` FOREIGN KEY (`tipoCampoRondaId`) REFERENCES `tipo_campo_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_92cdea117f4db407d77c6bc898d` FOREIGN KEY (`unidadMedidaId`) REFERENCES `unidad_medida`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_ef86ccfcacb600d45b823aba6c8` FOREIGN KEY (`plantillaRondaId`) REFERENCES `plantilla_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `plantilla_ronda_campo_ronda_ids_campo_ronda` ADD CONSTRAINT `FK_5b8975410258a90e67bc39780de` FOREIGN KEY (`plantillaRondaId`) REFERENCES `plantilla_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `plantilla_ronda_campo_ronda_ids_campo_ronda` ADD CONSTRAINT `FK_3766b2e654975a293574d4343c9` FOREIGN KEY (`campoRondaId`) REFERENCES `campo_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `plantilla_ronda_campo_ronda_ids_campo_ronda` DROP FOREIGN KEY `FK_3766b2e654975a293574d4343c9`");
            yield queryRunner.query("ALTER TABLE `plantilla_ronda_campo_ronda_ids_campo_ronda` DROP FOREIGN KEY `FK_5b8975410258a90e67bc39780de`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_ef86ccfcacb600d45b823aba6c8`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_92cdea117f4db407d77c6bc898d`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_d8de8ca317daa257869679a9a20`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_d51668d2140bee962e5c7ec2781`");
        });
    }
}
exports.CamposMany2Many1603220018388 = CamposMany2Many1603220018388;
//# sourceMappingURL=1603220018388-CamposMany2Many.js.map