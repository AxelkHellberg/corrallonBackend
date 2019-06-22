import {MigrationInterface, QueryRunner} from "typeorm";

export class alter1561236657650 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `planta` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `descripcion` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tag` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `obligatorio` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `sistema` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `descripcion` varchar(255) NOT NULL, `plantaId` int NOT NULL, `tagId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `equipamiento` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `detalle` varchar(255) NOT NULL, `sistemaId` int NOT NULL, `tagId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `fileNumber` varchar(255) NULL, `dni` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `profileId` int NOT NULL, INDEX `IDX_9466682df91534dd95e4dbaa61` (`profileId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `join_type` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `join_report` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `joinColumn` varchar(255) NOT NULL, `joinAlias` varchar(255) NOT NULL, `reportId` int NOT NULL, `joinTypeId` int NOT NULL, INDEX `IDX_cf44e7badf7c1da27b5cbbedec` (`reportId`), INDEX `IDX_d2aff19ca457a315cd378d2346` (`joinTypeId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `report` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `description` varchar(255) NOT NULL, `from` varchar(255) NOT NULL, `where` varchar(255) NOT NULL, `entityAlias` varchar(255) NOT NULL, `select` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profile` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `permission_ws` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `servicePath` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `httpMethodId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `http_method` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profile_permissions_ws_permission_ws` (`profileId` int NOT NULL, `permissionWsId` int NOT NULL, INDEX `IDX_fb0faa2637a409f52894138dcc` (`profileId`), INDEX `IDX_948caf9f9a1e21ad28f3034d05` (`permissionWsId`), PRIMARY KEY (`profileId`, `permissionWsId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `permissionReport` (`profileId` int NOT NULL, `reportId` int NOT NULL, INDEX `IDX_bd8c3134ac815216543ba167c8` (`profileId`), INDEX `IDX_ae822892a2f1826a86c727c6c0` (`reportId`), PRIMARY KEY (`profileId`, `reportId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_1e33578c115749c620edfef2d75` FOREIGN KEY (`plantaId`) REFERENCES `planta`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_f5bd69e6cc4c55f3db21b409b1c` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `equipamiento` ADD CONSTRAINT `FK_71b008c32042dfa806a87d95223` FOREIGN KEY (`sistemaId`) REFERENCES `sistema`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `equipamiento` ADD CONSTRAINT `FK_79bb5e7eb4b0ce1f88b83be8225` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_9466682df91534dd95e4dbaa616` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `join_report` ADD CONSTRAINT `FK_cf44e7badf7c1da27b5cbbedec5` FOREIGN KEY (`reportId`) REFERENCES `report`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `join_report` ADD CONSTRAINT `FK_d2aff19ca457a315cd378d23469` FOREIGN KEY (`joinTypeId`) REFERENCES `join_type`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `permission_ws` ADD CONSTRAINT `FK_27d0cd189e7ccee7b5adf174ba4` FOREIGN KEY (`httpMethodId`) REFERENCES `http_method`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` ADD CONSTRAINT `FK_fb0faa2637a409f52894138dccb` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` ADD CONSTRAINT `FK_948caf9f9a1e21ad28f3034d05c` FOREIGN KEY (`permissionWsId`) REFERENCES `permission_ws`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `permissionReport` ADD CONSTRAINT `FK_bd8c3134ac815216543ba167c83` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `permissionReport` ADD CONSTRAINT `FK_ae822892a2f1826a86c727c6c02` FOREIGN KEY (`reportId`) REFERENCES `report`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `permissionReport` DROP FOREIGN KEY `FK_ae822892a2f1826a86c727c6c02`");
        await queryRunner.query("ALTER TABLE `permissionReport` DROP FOREIGN KEY `FK_bd8c3134ac815216543ba167c83`");
        await queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` DROP FOREIGN KEY `FK_948caf9f9a1e21ad28f3034d05c`");
        await queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` DROP FOREIGN KEY `FK_fb0faa2637a409f52894138dccb`");
        await queryRunner.query("ALTER TABLE `permission_ws` DROP FOREIGN KEY `FK_27d0cd189e7ccee7b5adf174ba4`");
        await queryRunner.query("ALTER TABLE `join_report` DROP FOREIGN KEY `FK_d2aff19ca457a315cd378d23469`");
        await queryRunner.query("ALTER TABLE `join_report` DROP FOREIGN KEY `FK_cf44e7badf7c1da27b5cbbedec5`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_9466682df91534dd95e4dbaa616`");
        await queryRunner.query("ALTER TABLE `equipamiento` DROP FOREIGN KEY `FK_79bb5e7eb4b0ce1f88b83be8225`");
        await queryRunner.query("ALTER TABLE `equipamiento` DROP FOREIGN KEY `FK_71b008c32042dfa806a87d95223`");
        await queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_f5bd69e6cc4c55f3db21b409b1c`");
        await queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_1e33578c115749c620edfef2d75`");
        await queryRunner.query("DROP INDEX `IDX_ae822892a2f1826a86c727c6c0` ON `permissionReport`");
        await queryRunner.query("DROP INDEX `IDX_bd8c3134ac815216543ba167c8` ON `permissionReport`");
        await queryRunner.query("DROP TABLE `permissionReport`");
        await queryRunner.query("DROP INDEX `IDX_948caf9f9a1e21ad28f3034d05` ON `profile_permissions_ws_permission_ws`");
        await queryRunner.query("DROP INDEX `IDX_fb0faa2637a409f52894138dcc` ON `profile_permissions_ws_permission_ws`");
        await queryRunner.query("DROP TABLE `profile_permissions_ws_permission_ws`");
        await queryRunner.query("DROP TABLE `http_method`");
        await queryRunner.query("DROP TABLE `permission_ws`");
        await queryRunner.query("DROP TABLE `profile`");
        await queryRunner.query("DROP TABLE `report`");
        await queryRunner.query("DROP INDEX `IDX_d2aff19ca457a315cd378d2346` ON `join_report`");
        await queryRunner.query("DROP INDEX `IDX_cf44e7badf7c1da27b5cbbedec` ON `join_report`");
        await queryRunner.query("DROP TABLE `join_report`");
        await queryRunner.query("DROP TABLE `join_type`");
        await queryRunner.query("DROP INDEX `IDX_9466682df91534dd95e4dbaa61` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `equipamiento`");
        await queryRunner.query("DROP TABLE `sistema`");
        await queryRunner.query("DROP TABLE `tag`");
        await queryRunner.query("DROP TABLE `planta`");
    }

}
