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
class init1561320477141 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE TABLE `planta` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `descripcion` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `tag` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `obligatorio` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `equipamiento` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `detalle` varchar(255) NOT NULL, `sistemaId` int NOT NULL, `tagId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `sistema` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `descripcion` varchar(255) NOT NULL, `plantaId` int NOT NULL, `tagId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `plantilla_guia_maniobra` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `http_method` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `permission_ws` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `servicePath` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `httpMethodId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `join_type` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `join_report` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `joinColumn` varchar(255) NOT NULL, `joinAlias` varchar(255) NOT NULL, `reportId` int NOT NULL, `joinTypeId` int NOT NULL, INDEX `IDX_cf44e7badf7c1da27b5cbbedec` (`reportId`), INDEX `IDX_d2aff19ca457a315cd378d2346` (`joinTypeId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `report` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, `from` varchar(255) NOT NULL, `where` varchar(255) NOT NULL, `entityAlias` varchar(255) NOT NULL, `select` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `profile` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `user` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `fileNumber` varchar(255) NULL, `dni` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `profileId` int NOT NULL, INDEX `IDX_9466682df91534dd95e4dbaa61` (`profileId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `guia_maniobra` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `guiaManiobraId` int NOT NULL, INDEX `IDX_8e97b26b2a8baddad3e139b0b7` (`guiaManiobraId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `valor_campo_maniobra` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `valor` tinyint NOT NULL, `valorNormal` tinyint NOT NULL, `guiaManiobraId` int NOT NULL, `CampoManiobraId` int NOT NULL, INDEX `IDX_3f07f54c600a9d6ef4b9cb7b82` (`guiaManiobraId`), INDEX `IDX_d6db1488d24991a167f65eb188` (`CampoManiobraId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `campo_maniobra` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `valorNormal` tinyint NOT NULL, `sistemaId` int NOT NULL, `plantillaGuiaManiobraId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `profile_permissions_ws_permission_ws` (`profileId` int NOT NULL, `permissionWsId` int NOT NULL, INDEX `IDX_fb0faa2637a409f52894138dcc` (`profileId`), INDEX `IDX_948caf9f9a1e21ad28f3034d05` (`permissionWsId`), PRIMARY KEY (`profileId`, `permissionWsId`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `permissionReport` (`profileId` int NOT NULL, `reportId` int NOT NULL, INDEX `IDX_bd8c3134ac815216543ba167c8` (`profileId`), INDEX `IDX_ae822892a2f1826a86c727c6c0` (`reportId`), PRIMARY KEY (`profileId`, `reportId`)) ENGINE=InnoDB");
            yield queryRunner.query("ALTER TABLE `equipamiento` ADD CONSTRAINT `FK_71b008c32042dfa806a87d95223` FOREIGN KEY (`sistemaId`) REFERENCES `sistema`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `equipamiento` ADD CONSTRAINT `FK_79bb5e7eb4b0ce1f88b83be8225` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_1e33578c115749c620edfef2d75` FOREIGN KEY (`plantaId`) REFERENCES `planta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_f5bd69e6cc4c55f3db21b409b1c` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `permission_ws` ADD CONSTRAINT `FK_27d0cd189e7ccee7b5adf174ba4` FOREIGN KEY (`httpMethodId`) REFERENCES `http_method`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `join_report` ADD CONSTRAINT `FK_cf44e7badf7c1da27b5cbbedec5` FOREIGN KEY (`reportId`) REFERENCES `report`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `join_report` ADD CONSTRAINT `FK_d2aff19ca457a315cd378d23469` FOREIGN KEY (`joinTypeId`) REFERENCES `join_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_9466682df91534dd95e4dbaa616` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_8e97b26b2a8baddad3e139b0b78` FOREIGN KEY (`guiaManiobraId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_3f07f54c600a9d6ef4b9cb7b82a` FOREIGN KEY (`guiaManiobraId`) REFERENCES `guia_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_d6db1488d24991a167f65eb1889` FOREIGN KEY (`CampoManiobraId`) REFERENCES `campo_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
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
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_d6db1488d24991a167f65eb1889`");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_3f07f54c600a9d6ef4b9cb7b82a`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_8e97b26b2a8baddad3e139b0b78`");
            yield queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_9466682df91534dd95e4dbaa616`");
            yield queryRunner.query("ALTER TABLE `join_report` DROP FOREIGN KEY `FK_d2aff19ca457a315cd378d23469`");
            yield queryRunner.query("ALTER TABLE `join_report` DROP FOREIGN KEY `FK_cf44e7badf7c1da27b5cbbedec5`");
            yield queryRunner.query("ALTER TABLE `permission_ws` DROP FOREIGN KEY `FK_27d0cd189e7ccee7b5adf174ba4`");
            yield queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_f5bd69e6cc4c55f3db21b409b1c`");
            yield queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_1e33578c115749c620edfef2d75`");
            yield queryRunner.query("ALTER TABLE `equipamiento` DROP FOREIGN KEY `FK_79bb5e7eb4b0ce1f88b83be8225`");
            yield queryRunner.query("ALTER TABLE `equipamiento` DROP FOREIGN KEY `FK_71b008c32042dfa806a87d95223`");
            yield queryRunner.query("DROP INDEX `IDX_ae822892a2f1826a86c727c6c0` ON `permissionReport`");
            yield queryRunner.query("DROP INDEX `IDX_bd8c3134ac815216543ba167c8` ON `permissionReport`");
            yield queryRunner.query("DROP TABLE `permissionReport`");
            yield queryRunner.query("DROP INDEX `IDX_948caf9f9a1e21ad28f3034d05` ON `profile_permissions_ws_permission_ws`");
            yield queryRunner.query("DROP INDEX `IDX_fb0faa2637a409f52894138dcc` ON `profile_permissions_ws_permission_ws`");
            yield queryRunner.query("DROP TABLE `profile_permissions_ws_permission_ws`");
            yield queryRunner.query("DROP TABLE `campo_maniobra`");
            yield queryRunner.query("DROP INDEX `IDX_d6db1488d24991a167f65eb188` ON `valor_campo_maniobra`");
            yield queryRunner.query("DROP INDEX `IDX_3f07f54c600a9d6ef4b9cb7b82` ON `valor_campo_maniobra`");
            yield queryRunner.query("DROP TABLE `valor_campo_maniobra`");
            yield queryRunner.query("DROP INDEX `IDX_8e97b26b2a8baddad3e139b0b7` ON `guia_maniobra`");
            yield queryRunner.query("DROP TABLE `guia_maniobra`");
            yield queryRunner.query("DROP INDEX `IDX_9466682df91534dd95e4dbaa61` ON `user`");
            yield queryRunner.query("DROP TABLE `user`");
            yield queryRunner.query("DROP TABLE `profile`");
            yield queryRunner.query("DROP TABLE `report`");
            yield queryRunner.query("DROP INDEX `IDX_d2aff19ca457a315cd378d2346` ON `join_report`");
            yield queryRunner.query("DROP INDEX `IDX_cf44e7badf7c1da27b5cbbedec` ON `join_report`");
            yield queryRunner.query("DROP TABLE `join_report`");
            yield queryRunner.query("DROP TABLE `join_type`");
            yield queryRunner.query("DROP TABLE `permission_ws`");
            yield queryRunner.query("DROP TABLE `http_method`");
            yield queryRunner.query("DROP TABLE `plantilla_guia_maniobra`");
            yield queryRunner.query("DROP TABLE `sistema`");
            yield queryRunner.query("DROP TABLE `equipamiento`");
            yield queryRunner.query("DROP TABLE `tag`");
            yield queryRunner.query("DROP TABLE `planta`");
        });
    }
}
exports.init1561320477141 = init1561320477141;
//# sourceMappingURL=1561320477141-init.js.map