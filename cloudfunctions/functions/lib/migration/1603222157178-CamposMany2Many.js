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
exports.CamposMany2Many1603222157178 = void 0;
class CamposMany2Many1603222157178 {
    constructor() {
        this.name = 'CamposMany2Many1603222157178';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP INDEX `FK_42ad9346d905d16a2ace89ab415` ON `campo_maniobra`");
            yield queryRunner.query("ALTER TABLE `falla_equipamiento` ADD CONSTRAINT `FK_074315a765e04c02adcd35e0be8` FOREIGN KEY (`equipamientoId`) REFERENCES `equipamiento`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `falla_sistema` ADD CONSTRAINT `FK_60ba0570af415001558925cc4d0` FOREIGN KEY (`sistemaId`) REFERENCES `sistema`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `falla_sistema` ADD CONSTRAINT `FK_75c595f31faa8520de4d28d2b6f` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda_plantilla_ronda` ADD CONSTRAINT `FK_f84923b15e8d4c6a699a7d20f83` FOREIGN KEY (`campoRondaId`) REFERENCES `campo_ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda_plantilla_ronda` ADD CONSTRAINT `FK_29d4271c511040c8747dbd9bb31` FOREIGN KEY (`plantillaRondaId`) REFERENCES `plantilla_ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_d51668d2140bee962e5c7ec2781` FOREIGN KEY (`equipamientoId`) REFERENCES `equipamiento`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_d8de8ca317daa257869679a9a20` FOREIGN KEY (`tipoCampoRondaId`) REFERENCES `tipo_campo_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_92cdea117f4db407d77c6bc898d` FOREIGN KEY (`unidadMedidaId`) REFERENCES `unidad_medida`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_ef86ccfcacb600d45b823aba6c8` FOREIGN KEY (`plantillaRondaId`) REFERENCES `plantilla_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` ADD CONSTRAINT `FK_20916c07f9600c5749f8276c192` FOREIGN KEY (`rondaId`) REFERENCES `ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` ADD CONSTRAINT `FK_8e5422b803a250b77c12f3e757d` FOREIGN KEY (`campoRondaId`) REFERENCES `campo_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` ADD CONSTRAINT `FK_afb5f65658b61e3b5b0fd93ff69` FOREIGN KEY (`estadoFallaId`) REFERENCES `estado_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` ADD CONSTRAINT `FK_80f5626e7bfdf906d8561bafe39` FOREIGN KEY (`tipoFallaId`) REFERENCES `tipo_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_3f07f54c600a9d6ef4b9cb7b82a` FOREIGN KEY (`guiaManiobraId`) REFERENCES `guia_maniobra`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_892036c32838dd214367300e80c` FOREIGN KEY (`campoManiobraId`) REFERENCES `campo_maniobra`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_65151f89d033dcc808d3e04c477` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_d09e6c8cdaf2b8d17ccd4c4b009` FOREIGN KEY (`plantillaGuiaManiobraId`) REFERENCES `plantilla_guia_maniobra`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `ronda` ADD CONSTRAINT `FK_7ee1917508d89f387ca6517fece` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `ronda` ADD CONSTRAINT `FK_bf1d6d1b48dc1fb370d37b17654` FOREIGN KEY (`estadoRondaId`) REFERENCES `estado_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `ronda` ADD CONSTRAINT `FK_94dbf7cf8cb5110044108a41170` FOREIGN KEY (`plantillaRondaId`) REFERENCES `plantilla_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `lectura_tag` ADD CONSTRAINT `FK_ecfeec215908d4736b96bae8324` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `lectura_tag` ADD CONSTRAINT `FK_f464e409ba430e756e96eb26217` FOREIGN KEY (`rondaId`) REFERENCES `ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `equipamiento` ADD CONSTRAINT `FK_71b008c32042dfa806a87d95223` FOREIGN KEY (`sistemaId`) REFERENCES `sistema`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `equipamiento` ADD CONSTRAINT `FK_79bb5e7eb4b0ce1f88b83be8225` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_1e33578c115749c620edfef2d75` FOREIGN KEY (`plantaId`) REFERENCES `planta`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_533c4bff07390c95b41825e153b` FOREIGN KEY (`tipoSistemaId`) REFERENCES `tipo_sistema`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_f5bd69e6cc4c55f3db21b409b1c` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_maniobra` ADD CONSTRAINT `FK_ad7c031ca2a03327bd9b309f3ef` FOREIGN KEY (`sistemaId`) REFERENCES `sistema`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_maniobra` ADD CONSTRAINT `FK_49c48adbebdf18dd533a8c1ca5a` FOREIGN KEY (`plantillaGuiaManiobraId`) REFERENCES `plantilla_guia_maniobra`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `campo_maniobra` DROP FOREIGN KEY `FK_49c48adbebdf18dd533a8c1ca5a`");
            yield queryRunner.query("ALTER TABLE `campo_maniobra` DROP FOREIGN KEY `FK_ad7c031ca2a03327bd9b309f3ef`");
            yield queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_f5bd69e6cc4c55f3db21b409b1c`");
            yield queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_533c4bff07390c95b41825e153b`");
            yield queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_1e33578c115749c620edfef2d75`");
            yield queryRunner.query("ALTER TABLE `equipamiento` DROP FOREIGN KEY `FK_79bb5e7eb4b0ce1f88b83be8225`");
            yield queryRunner.query("ALTER TABLE `equipamiento` DROP FOREIGN KEY `FK_71b008c32042dfa806a87d95223`");
            yield queryRunner.query("ALTER TABLE `lectura_tag` DROP FOREIGN KEY `FK_f464e409ba430e756e96eb26217`");
            yield queryRunner.query("ALTER TABLE `lectura_tag` DROP FOREIGN KEY `FK_ecfeec215908d4736b96bae8324`");
            yield queryRunner.query("ALTER TABLE `ronda` DROP FOREIGN KEY `FK_94dbf7cf8cb5110044108a41170`");
            yield queryRunner.query("ALTER TABLE `ronda` DROP FOREIGN KEY `FK_bf1d6d1b48dc1fb370d37b17654`");
            yield queryRunner.query("ALTER TABLE `ronda` DROP FOREIGN KEY `FK_7ee1917508d89f387ca6517fece`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_d09e6c8cdaf2b8d17ccd4c4b009`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_65151f89d033dcc808d3e04c477`");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_892036c32838dd214367300e80c`");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_3f07f54c600a9d6ef4b9cb7b82a`");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` DROP FOREIGN KEY `FK_80f5626e7bfdf906d8561bafe39`");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` DROP FOREIGN KEY `FK_afb5f65658b61e3b5b0fd93ff69`");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` DROP FOREIGN KEY `FK_8e5422b803a250b77c12f3e757d`");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` DROP FOREIGN KEY `FK_20916c07f9600c5749f8276c192`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_ef86ccfcacb600d45b823aba6c8`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_92cdea117f4db407d77c6bc898d`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_d8de8ca317daa257869679a9a20`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_d51668d2140bee962e5c7ec2781`");
            yield queryRunner.query("ALTER TABLE `campo_ronda_plantilla_ronda` DROP FOREIGN KEY `FK_29d4271c511040c8747dbd9bb31`");
            yield queryRunner.query("ALTER TABLE `campo_ronda_plantilla_ronda` DROP FOREIGN KEY `FK_f84923b15e8d4c6a699a7d20f83`");
            yield queryRunner.query("ALTER TABLE `falla_sistema` DROP FOREIGN KEY `FK_75c595f31faa8520de4d28d2b6f`");
            yield queryRunner.query("ALTER TABLE `falla_sistema` DROP FOREIGN KEY `FK_60ba0570af415001558925cc4d0`");
            yield queryRunner.query("ALTER TABLE `falla_equipamiento` DROP FOREIGN KEY `FK_074315a765e04c02adcd35e0be8`");
            yield queryRunner.query("CREATE INDEX `FK_42ad9346d905d16a2ace89ab415` ON `campo_maniobra` (`sistemaId`)");
        });
    }
}
exports.CamposMany2Many1603222157178 = CamposMany2Many1603222157178;
//# sourceMappingURL=1603222157178-CamposMany2Many.js.map