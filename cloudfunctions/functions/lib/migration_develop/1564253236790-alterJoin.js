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
exports.alterJoin1564253236790 = void 0;
class alterJoin1564253236790 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP INDEX `FK_27d0cd189e7ccee7b5adf174ba4` ON `permission_ws`");
            yield queryRunner.query("DROP INDEX `FK_3cf88d8026781d0cd9a1734f352` ON `lista_ronda`");
            yield queryRunner.query("DROP INDEX `FK_d51668d2140bee962e5c7ec2781` ON `campo_ronda`");
            yield queryRunner.query("DROP INDEX `FK_d8de8ca317daa257869679a9a20` ON `campo_ronda`");
            yield queryRunner.query("DROP INDEX `FK_92cdea117f4db407d77c6bc898d` ON `campo_ronda`");
            yield queryRunner.query("DROP INDEX `FK_ef86ccfcacb600d45b823aba6c8` ON `campo_ronda`");
            yield queryRunner.query("DROP INDEX `FK_53e0bf7ad95e698d0e41aa0ca1b` ON `plantilla_ronda`");
            yield queryRunner.query("DROP INDEX `FK_7ee1917508d89f387ca6517fece` ON `ronda`");
            yield queryRunner.query("DROP INDEX `FK_bf1d6d1b48dc1fb370d37b17654` ON `ronda`");
            yield queryRunner.query("DROP INDEX `FK_94dbf7cf8cb5110044108a41170` ON `ronda`");
            yield queryRunner.query("DROP INDEX `FK_ecfeec215908d4736b96bae8324` ON `lectura_tag`");
            yield queryRunner.query("DROP INDEX `FK_f464e409ba430e756e96eb26217` ON `lectura_tag`");
            yield queryRunner.query("DROP INDEX `FK_71b008c32042dfa806a87d95223` ON `equipamiento`");
            yield queryRunner.query("DROP INDEX `FK_79bb5e7eb4b0ce1f88b83be8225` ON `equipamiento`");
            yield queryRunner.query("DROP INDEX `FK_f5bd69e6cc4c55f3db21b409b1c` ON `sistema`");
            yield queryRunner.query("DROP INDEX `FK_1e33578c115749c620edfef2d75` ON `sistema`");
            yield queryRunner.query("DROP INDEX `FK_ad7c031ca2a03327bd9b309f3ef` ON `campo_maniobra`");
            yield queryRunner.query("DROP INDEX `FK_49c48adbebdf18dd533a8c1ca5a` ON `campo_maniobra`");
            yield queryRunner.query("ALTER TABLE `join_report` ADD `joinWhere` varchar(255) NULL");
            yield queryRunner.query("ALTER TABLE `permission_ws` ADD CONSTRAINT `FK_27d0cd189e7ccee7b5adf174ba4` FOREIGN KEY (`httpMethodId`) REFERENCES `http_method`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `join_report` ADD CONSTRAINT `FK_cf44e7badf7c1da27b5cbbedec5` FOREIGN KEY (`reportId`) REFERENCES `report`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `join_report` ADD CONSTRAINT `FK_d2aff19ca457a315cd378d23469` FOREIGN KEY (`joinTypeId`) REFERENCES `join_type`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `historial_estado_falla` ADD CONSTRAINT `FK_65d6c030adf114039dcaa4c3f19` FOREIGN KEY (`estadoFallaId`) REFERENCES `estado_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `historial_estado_falla` ADD CONSTRAINT `FK_f6493f4f7ef2a3e00d24db58f1d` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `falla_equipamiento` ADD CONSTRAINT `FK_074315a765e04c02adcd35e0be8` FOREIGN KEY (`equipamientoId`) REFERENCES `equipamiento`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `falla_equipamiento` ADD CONSTRAINT `FK_aca580a2b206373cb84abd8847e` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `falla_sistema` ADD CONSTRAINT `FK_60ba0570af415001558925cc4d0` FOREIGN KEY (`sistemaId`) REFERENCES `sistema`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `falla_sistema` ADD CONSTRAINT `FK_75c595f31faa8520de4d28d2b6f` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` ADD CONSTRAINT `FK_afb5f65658b61e3b5b0fd93ff69` FOREIGN KEY (`estadoFallaId`) REFERENCES `estado_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` ADD CONSTRAINT `FK_80f5626e7bfdf906d8561bafe39` FOREIGN KEY (`tipoFallaId`) REFERENCES `tipo_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_3f07f54c600a9d6ef4b9cb7b82a` FOREIGN KEY (`guiaManiobraId`) REFERENCES `guia_maniobra`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_892036c32838dd214367300e80c` FOREIGN KEY (`campoManiobraId`) REFERENCES `campo_maniobra`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_65151f89d033dcc808d3e04c477` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_d09e6c8cdaf2b8d17ccd4c4b009` FOREIGN KEY (`plantillaGuiaManiobraId`) REFERENCES `plantilla_guia_maniobra`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `lista_ronda` ADD CONSTRAINT `FK_3cf88d8026781d0cd9a1734f352` FOREIGN KEY (`campoRondaId`) REFERENCES `campo_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` ADD CONSTRAINT `FK_20916c07f9600c5749f8276c192` FOREIGN KEY (`rondaId`) REFERENCES `ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` ADD CONSTRAINT `FK_8e5422b803a250b77c12f3e757d` FOREIGN KEY (`campoRondaId`) REFERENCES `campo_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_d51668d2140bee962e5c7ec2781` FOREIGN KEY (`equipamientoId`) REFERENCES `equipamiento`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_d8de8ca317daa257869679a9a20` FOREIGN KEY (`tipoCampoRondaId`) REFERENCES `tipo_campo_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_92cdea117f4db407d77c6bc898d` FOREIGN KEY (`unidadMedidaId`) REFERENCES `unidad_medida`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_ef86ccfcacb600d45b823aba6c8` FOREIGN KEY (`plantillaRondaId`) REFERENCES `plantilla_ronda`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `plantilla_ronda` ADD CONSTRAINT `FK_53e0bf7ad95e698d0e41aa0ca1b` FOREIGN KEY (`horarioId`) REFERENCES `horario`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
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
            yield queryRunner.query("ALTER TABLE `plantilla_ronda` DROP FOREIGN KEY `FK_53e0bf7ad95e698d0e41aa0ca1b`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_ef86ccfcacb600d45b823aba6c8`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_92cdea117f4db407d77c6bc898d`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_d8de8ca317daa257869679a9a20`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_d51668d2140bee962e5c7ec2781`");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` DROP FOREIGN KEY `FK_8e5422b803a250b77c12f3e757d`");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` DROP FOREIGN KEY `FK_20916c07f9600c5749f8276c192`");
            yield queryRunner.query("ALTER TABLE `lista_ronda` DROP FOREIGN KEY `FK_3cf88d8026781d0cd9a1734f352`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_d09e6c8cdaf2b8d17ccd4c4b009`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_65151f89d033dcc808d3e04c477`");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_892036c32838dd214367300e80c`");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_3f07f54c600a9d6ef4b9cb7b82a`");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` DROP FOREIGN KEY `FK_80f5626e7bfdf906d8561bafe39`");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` DROP FOREIGN KEY `FK_afb5f65658b61e3b5b0fd93ff69`");
            yield queryRunner.query("ALTER TABLE `falla_sistema` DROP FOREIGN KEY `FK_75c595f31faa8520de4d28d2b6f`");
            yield queryRunner.query("ALTER TABLE `falla_sistema` DROP FOREIGN KEY `FK_60ba0570af415001558925cc4d0`");
            yield queryRunner.query("ALTER TABLE `falla_equipamiento` DROP FOREIGN KEY `FK_aca580a2b206373cb84abd8847e`");
            yield queryRunner.query("ALTER TABLE `falla_equipamiento` DROP FOREIGN KEY `FK_074315a765e04c02adcd35e0be8`");
            yield queryRunner.query("ALTER TABLE `historial_estado_falla` DROP FOREIGN KEY `FK_f6493f4f7ef2a3e00d24db58f1d`");
            yield queryRunner.query("ALTER TABLE `historial_estado_falla` DROP FOREIGN KEY `FK_65d6c030adf114039dcaa4c3f19`");
            yield queryRunner.query("ALTER TABLE `join_report` DROP FOREIGN KEY `FK_d2aff19ca457a315cd378d23469`");
            yield queryRunner.query("ALTER TABLE `join_report` DROP FOREIGN KEY `FK_cf44e7badf7c1da27b5cbbedec5`");
            yield queryRunner.query("ALTER TABLE `permission_ws` DROP FOREIGN KEY `FK_27d0cd189e7ccee7b5adf174ba4`");
            yield queryRunner.query("ALTER TABLE `join_report` DROP COLUMN `joinWhere`");
            yield queryRunner.query("CREATE INDEX `FK_49c48adbebdf18dd533a8c1ca5a` ON `campo_maniobra` (`plantillaGuiaManiobraId`)");
            yield queryRunner.query("CREATE INDEX `FK_ad7c031ca2a03327bd9b309f3ef` ON `campo_maniobra` (`sistemaId`)");
            yield queryRunner.query("CREATE INDEX `FK_1e33578c115749c620edfef2d75` ON `sistema` (`plantaId`)");
            yield queryRunner.query("CREATE INDEX `FK_f5bd69e6cc4c55f3db21b409b1c` ON `sistema` (`tagId`)");
            yield queryRunner.query("CREATE INDEX `FK_79bb5e7eb4b0ce1f88b83be8225` ON `equipamiento` (`tagId`)");
            yield queryRunner.query("CREATE INDEX `FK_71b008c32042dfa806a87d95223` ON `equipamiento` (`sistemaId`)");
            yield queryRunner.query("CREATE INDEX `FK_f464e409ba430e756e96eb26217` ON `lectura_tag` (`rondaId`)");
            yield queryRunner.query("CREATE INDEX `FK_ecfeec215908d4736b96bae8324` ON `lectura_tag` (`tagId`)");
            yield queryRunner.query("CREATE INDEX `FK_94dbf7cf8cb5110044108a41170` ON `ronda` (`plantillaRondaId`)");
            yield queryRunner.query("CREATE INDEX `FK_bf1d6d1b48dc1fb370d37b17654` ON `ronda` (`estadoRondaId`)");
            yield queryRunner.query("CREATE INDEX `FK_7ee1917508d89f387ca6517fece` ON `ronda` (`userId`)");
            yield queryRunner.query("CREATE INDEX `FK_53e0bf7ad95e698d0e41aa0ca1b` ON `plantilla_ronda` (`horarioId`)");
            yield queryRunner.query("CREATE INDEX `FK_ef86ccfcacb600d45b823aba6c8` ON `campo_ronda` (`plantillaRondaId`)");
            yield queryRunner.query("CREATE INDEX `FK_92cdea117f4db407d77c6bc898d` ON `campo_ronda` (`unidadMedidaId`)");
            yield queryRunner.query("CREATE INDEX `FK_d8de8ca317daa257869679a9a20` ON `campo_ronda` (`tipoCampoRondaId`)");
            yield queryRunner.query("CREATE INDEX `FK_d51668d2140bee962e5c7ec2781` ON `campo_ronda` (`equipamientoId`)");
            yield queryRunner.query("CREATE INDEX `FK_3cf88d8026781d0cd9a1734f352` ON `lista_ronda` (`campoRondaId`)");
            yield queryRunner.query("CREATE INDEX `FK_27d0cd189e7ccee7b5adf174ba4` ON `permission_ws` (`httpMethodId`)");
        });
    }
}
exports.alterJoin1564253236790 = alterJoin1564253236790;
//# sourceMappingURL=1564253236790-alterJoin.js.map