"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class init1561687657542 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE TABLE `planta` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `descripcion` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `http_method` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `permission_ws` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `servicePath` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `httpMethodId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `join_type` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `join_report` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `joinColumn` varchar(255) NOT NULL, `joinAlias` varchar(255) NOT NULL, `reportId` int NOT NULL, `joinTypeId` int NOT NULL, INDEX `IDX_cf44e7badf7c1da27b5cbbedec` (`reportId`), INDEX `IDX_d2aff19ca457a315cd378d2346` (`joinTypeId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `report` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, `from` varchar(255) NOT NULL, `where` varchar(255) NOT NULL, `entityAlias` varchar(255) NOT NULL, `select` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `profile` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `valor_campo_maniobra` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `valor` tinyint NOT NULL, `valorNormal` tinyint NOT NULL, `guiaManiobraId` int NOT NULL, `campoManiobraId` int NOT NULL, INDEX `IDX_3f07f54c600a9d6ef4b9cb7b82` (`guiaManiobraId`), INDEX `IDX_892036c32838dd214367300e80` (`campoManiobraId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `plantilla_guia_maniobra` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `guia_maniobra` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `userId` int NOT NULL, `plantillaGuiaManiobraId` int NOT NULL, INDEX `IDX_65151f89d033dcc808d3e04c47` (`userId`), INDEX `IDX_d09e6c8cdaf2b8d17ccd4c4b00` (`plantillaGuiaManiobraId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `user` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `fileNumber` varchar(255) NULL, `dni` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `profileId` int NOT NULL, INDEX `IDX_9466682df91534dd95e4dbaa61` (`profileId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `estado_ronda` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `posicion` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `tipo_campo_ronda` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `unidad_medida` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `lista_ronda` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `llave` varchar(255) NOT NULL, `valor` varchar(255) NOT NULL, `campoRondaId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `valor_campo_ronda` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `valor` varchar(255) NOT NULL, `valorNormal` varchar(255) NOT NULL, `rondaId` int NOT NULL, `campoRondaId` int NOT NULL, INDEX `IDX_20916c07f9600c5749f8276c19` (`rondaId`), INDEX `IDX_8e5422b803a250b77c12f3e757` (`campoRondaId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `campo_ronda` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `valorNormal` varchar(255) NOT NULL, `valorMin` varchar(255) NOT NULL, `valorMax` varchar(255) NOT NULL, `equipamientoId` int NOT NULL, `tipoCampoRondaId` int NOT NULL, `unidadMedidaId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `horario` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `hora` int NOT NULL, `minuto` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `plantilla_ronda` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `funcionamientoSistema` tinyint NOT NULL, `obligatorioSistema` tinyint NOT NULL, `funcionamientoEquipo` tinyint NOT NULL, `obligatorioEquipo` tinyint NOT NULL, `horarioId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `ronda` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `porcentaje` float(5,2) NOT NULL, `tiempoRondaMinutos` int NOT NULL, `userId` int NOT NULL, `estadoRondaId` int NOT NULL, `plantillaRondaId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `lectura_tag` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `tagId` int NOT NULL, `rondaId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `tag` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `obligatorio` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `equipamiento` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `detalle` varchar(255) NOT NULL, `sistemaId` int NOT NULL, `tagId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `sistema` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `descripcion` varchar(255) NOT NULL, `plantaId` int NOT NULL, `tagId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `campo_maniobra` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `valorNormal` tinyint NOT NULL, `sistemaId` int NOT NULL, `plantillaGuiaManiobraId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `profile_permissions_ws_permission_ws` (`profileId` int NOT NULL, `permissionWsId` int NOT NULL, INDEX `IDX_fb0faa2637a409f52894138dcc` (`profileId`), INDEX `IDX_948caf9f9a1e21ad28f3034d05` (`permissionWsId`), PRIMARY KEY (`profileId`, `permissionWsId`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `permissionReport` (`profileId` int NOT NULL, `reportId` int NOT NULL, INDEX `IDX_bd8c3134ac815216543ba167c8` (`profileId`), INDEX `IDX_ae822892a2f1826a86c727c6c0` (`reportId`), PRIMARY KEY (`profileId`, `reportId`)) ENGINE=InnoDB");
            yield queryRunner.query("ALTER TABLE `permission_ws` ADD CONSTRAINT `FK_27d0cd189e7ccee7b5adf174ba4` FOREIGN KEY (`httpMethodId`) REFERENCES `http_method`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `join_report` ADD CONSTRAINT `FK_cf44e7badf7c1da27b5cbbedec5` FOREIGN KEY (`reportId`) REFERENCES `report`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `join_report` ADD CONSTRAINT `FK_d2aff19ca457a315cd378d23469` FOREIGN KEY (`joinTypeId`) REFERENCES `join_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_3f07f54c600a9d6ef4b9cb7b82a` FOREIGN KEY (`guiaManiobraId`) REFERENCES `guia_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_892036c32838dd214367300e80c` FOREIGN KEY (`campoManiobraId`) REFERENCES `campo_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_65151f89d033dcc808d3e04c477` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_d09e6c8cdaf2b8d17ccd4c4b009` FOREIGN KEY (`plantillaGuiaManiobraId`) REFERENCES `plantilla_guia_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_9466682df91534dd95e4dbaa616` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `lista_ronda` ADD CONSTRAINT `FK_3cf88d8026781d0cd9a1734f352` FOREIGN KEY (`campoRondaId`) REFERENCES `campo_ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` ADD CONSTRAINT `FK_20916c07f9600c5749f8276c192` FOREIGN KEY (`rondaId`) REFERENCES `ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` ADD CONSTRAINT `FK_8e5422b803a250b77c12f3e757d` FOREIGN KEY (`campoRondaId`) REFERENCES `campo_ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_d51668d2140bee962e5c7ec2781` FOREIGN KEY (`equipamientoId`) REFERENCES `equipamiento`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_d8de8ca317daa257869679a9a20` FOREIGN KEY (`tipoCampoRondaId`) REFERENCES `tipo_campo_ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_92cdea117f4db407d77c6bc898d` FOREIGN KEY (`unidadMedidaId`) REFERENCES `unidad_medida`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `plantilla_ronda` ADD CONSTRAINT `FK_53e0bf7ad95e698d0e41aa0ca1b` FOREIGN KEY (`horarioId`) REFERENCES `horario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `ronda` ADD CONSTRAINT `FK_7ee1917508d89f387ca6517fece` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `ronda` ADD CONSTRAINT `FK_bf1d6d1b48dc1fb370d37b17654` FOREIGN KEY (`estadoRondaId`) REFERENCES `estado_ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `ronda` ADD CONSTRAINT `FK_94dbf7cf8cb5110044108a41170` FOREIGN KEY (`plantillaRondaId`) REFERENCES `plantilla_ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `lectura_tag` ADD CONSTRAINT `FK_ecfeec215908d4736b96bae8324` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `lectura_tag` ADD CONSTRAINT `FK_f464e409ba430e756e96eb26217` FOREIGN KEY (`rondaId`) REFERENCES `ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `equipamiento` ADD CONSTRAINT `FK_71b008c32042dfa806a87d95223` FOREIGN KEY (`sistemaId`) REFERENCES `sistema`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `equipamiento` ADD CONSTRAINT `FK_79bb5e7eb4b0ce1f88b83be8225` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_1e33578c115749c620edfef2d75` FOREIGN KEY (`plantaId`) REFERENCES `planta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_f5bd69e6cc4c55f3db21b409b1c` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_maniobra` ADD CONSTRAINT `FK_ad7c031ca2a03327bd9b309f3ef` FOREIGN KEY (`sistemaId`) REFERENCES `sistema`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `campo_maniobra` ADD CONSTRAINT `FK_49c48adbebdf18dd533a8c1ca5a` FOREIGN KEY (`plantillaGuiaManiobraId`) REFERENCES `plantilla_guia_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` ADD CONSTRAINT `FK_fb0faa2637a409f52894138dccb` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` ADD CONSTRAINT `FK_948caf9f9a1e21ad28f3034d05c` FOREIGN KEY (`permissionWsId`) REFERENCES `permission_ws`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `permissionReport` ADD CONSTRAINT `FK_bd8c3134ac815216543ba167c83` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `permissionReport` ADD CONSTRAINT `FK_ae822892a2f1826a86c727c6c02` FOREIGN KEY (`reportId`) REFERENCES `report`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `permissionReport` DROP FOREIGN KEY `FK_ae822892a2f1826a86c727c6c02`");
            yield queryRunner.query("ALTER TABLE `permissionReport` DROP FOREIGN KEY `FK_bd8c3134ac815216543ba167c83`");
            yield queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` DROP FOREIGN KEY `FK_948caf9f9a1e21ad28f3034d05c`");
            yield queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` DROP FOREIGN KEY `FK_fb0faa2637a409f52894138dccb`");
            yield queryRunner.query("ALTER TABLE `campo_maniobra` DROP FOREIGN KEY `FK_49c48adbebdf18dd533a8c1ca5a`");
            yield queryRunner.query("ALTER TABLE `campo_maniobra` DROP FOREIGN KEY `FK_ad7c031ca2a03327bd9b309f3ef`");
            yield queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_f5bd69e6cc4c55f3db21b409b1c`");
            yield queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_1e33578c115749c620edfef2d75`");
            yield queryRunner.query("ALTER TABLE `equipamiento` DROP FOREIGN KEY `FK_79bb5e7eb4b0ce1f88b83be8225`");
            yield queryRunner.query("ALTER TABLE `equipamiento` DROP FOREIGN KEY `FK_71b008c32042dfa806a87d95223`");
            yield queryRunner.query("ALTER TABLE `lectura_tag` DROP FOREIGN KEY `FK_f464e409ba430e756e96eb26217`");
            yield queryRunner.query("ALTER TABLE `lectura_tag` DROP FOREIGN KEY `FK_ecfeec215908d4736b96bae8324`");
            yield queryRunner.query("ALTER TABLE `ronda` DROP FOREIGN KEY `FK_94dbf7cf8cb5110044108a41170`");
            yield queryRunner.query("ALTER TABLE `ronda` DROP FOREIGN KEY `FK_bf1d6d1b48dc1fb370d37b17654`");
            yield queryRunner.query("ALTER TABLE `ronda` DROP FOREIGN KEY `FK_7ee1917508d89f387ca6517fece`");
            yield queryRunner.query("ALTER TABLE `plantilla_ronda` DROP FOREIGN KEY `FK_53e0bf7ad95e698d0e41aa0ca1b`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_92cdea117f4db407d77c6bc898d`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_d8de8ca317daa257869679a9a20`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_d51668d2140bee962e5c7ec2781`");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` DROP FOREIGN KEY `FK_8e5422b803a250b77c12f3e757d`");
            yield queryRunner.query("ALTER TABLE `valor_campo_ronda` DROP FOREIGN KEY `FK_20916c07f9600c5749f8276c192`");
            yield queryRunner.query("ALTER TABLE `lista_ronda` DROP FOREIGN KEY `FK_3cf88d8026781d0cd9a1734f352`");
            yield queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_9466682df91534dd95e4dbaa616`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_d09e6c8cdaf2b8d17ccd4c4b009`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_65151f89d033dcc808d3e04c477`");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_892036c32838dd214367300e80c`");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_3f07f54c600a9d6ef4b9cb7b82a`");
            yield queryRunner.query("ALTER TABLE `join_report` DROP FOREIGN KEY `FK_d2aff19ca457a315cd378d23469`");
            yield queryRunner.query("ALTER TABLE `join_report` DROP FOREIGN KEY `FK_cf44e7badf7c1da27b5cbbedec5`");
            yield queryRunner.query("ALTER TABLE `permission_ws` DROP FOREIGN KEY `FK_27d0cd189e7ccee7b5adf174ba4`");
            yield queryRunner.query("DROP INDEX `IDX_ae822892a2f1826a86c727c6c0` ON `permissionReport`");
            yield queryRunner.query("DROP INDEX `IDX_bd8c3134ac815216543ba167c8` ON `permissionReport`");
            yield queryRunner.query("DROP TABLE `permissionReport`");
            yield queryRunner.query("DROP INDEX `IDX_948caf9f9a1e21ad28f3034d05` ON `profile_permissions_ws_permission_ws`");
            yield queryRunner.query("DROP INDEX `IDX_fb0faa2637a409f52894138dcc` ON `profile_permissions_ws_permission_ws`");
            yield queryRunner.query("DROP TABLE `profile_permissions_ws_permission_ws`");
            yield queryRunner.query("DROP TABLE `campo_maniobra`");
            yield queryRunner.query("DROP TABLE `sistema`");
            yield queryRunner.query("DROP TABLE `equipamiento`");
            yield queryRunner.query("DROP TABLE `tag`");
            yield queryRunner.query("DROP TABLE `lectura_tag`");
            yield queryRunner.query("DROP TABLE `ronda`");
            yield queryRunner.query("DROP TABLE `plantilla_ronda`");
            yield queryRunner.query("DROP TABLE `horario`");
            yield queryRunner.query("DROP TABLE `campo_ronda`");
            yield queryRunner.query("DROP INDEX `IDX_8e5422b803a250b77c12f3e757` ON `valor_campo_ronda`");
            yield queryRunner.query("DROP INDEX `IDX_20916c07f9600c5749f8276c19` ON `valor_campo_ronda`");
            yield queryRunner.query("DROP TABLE `valor_campo_ronda`");
            yield queryRunner.query("DROP TABLE `lista_ronda`");
            yield queryRunner.query("DROP TABLE `unidad_medida`");
            yield queryRunner.query("DROP TABLE `tipo_campo_ronda`");
            yield queryRunner.query("DROP TABLE `estado_ronda`");
            yield queryRunner.query("DROP INDEX `IDX_9466682df91534dd95e4dbaa61` ON `user`");
            yield queryRunner.query("DROP TABLE `user`");
            yield queryRunner.query("DROP INDEX `IDX_d09e6c8cdaf2b8d17ccd4c4b00` ON `guia_maniobra`");
            yield queryRunner.query("DROP INDEX `IDX_65151f89d033dcc808d3e04c47` ON `guia_maniobra`");
            yield queryRunner.query("DROP TABLE `guia_maniobra`");
            yield queryRunner.query("DROP TABLE `plantilla_guia_maniobra`");
            yield queryRunner.query("DROP INDEX `IDX_892036c32838dd214367300e80` ON `valor_campo_maniobra`");
            yield queryRunner.query("DROP INDEX `IDX_3f07f54c600a9d6ef4b9cb7b82` ON `valor_campo_maniobra`");
            yield queryRunner.query("DROP TABLE `valor_campo_maniobra`");
            yield queryRunner.query("DROP TABLE `profile`");
            yield queryRunner.query("DROP TABLE `report`");
            yield queryRunner.query("DROP INDEX `IDX_d2aff19ca457a315cd378d2346` ON `join_report`");
            yield queryRunner.query("DROP INDEX `IDX_cf44e7badf7c1da27b5cbbedec` ON `join_report`");
            yield queryRunner.query("DROP TABLE `join_report`");
            yield queryRunner.query("DROP TABLE `join_type`");
            yield queryRunner.query("DROP TABLE `permission_ws`");
            yield queryRunner.query("DROP TABLE `http_method`");
            yield queryRunner.query("DROP TABLE `planta`");
        });
    }
}
exports.init1561687657542 = init1561687657542;
//# sourceMappingURL=1561687657542-init.js.map