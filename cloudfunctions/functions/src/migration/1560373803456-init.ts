import {MigrationInterface, QueryRunner} from "typeorm";

export class init1560373803456 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `fileNumber` varchar(255) NOT NULL, `dni` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `profileId` int NOT NULL, INDEX `IDX_9466682df91534dd95e4dbaa61` (`profileId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profile` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `permission_ws` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `servicePath` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `httpMethodId` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `http_method` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `profile_permissions_ws_permission_ws` (`profileId` int NOT NULL, `permissionWsId` int NOT NULL, INDEX `IDX_fb0faa2637a409f52894138dcc` (`profileId`), INDEX `IDX_948caf9f9a1e21ad28f3034d05` (`permissionWsId`), PRIMARY KEY (`profileId`, `permissionWsId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `user` ADD CONSTRAINT `FK_9466682df91534dd95e4dbaa616` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `permission_ws` ADD CONSTRAINT `FK_27d0cd189e7ccee7b5adf174ba4` FOREIGN KEY (`httpMethodId`) REFERENCES `http_method`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` ADD CONSTRAINT `FK_fb0faa2637a409f52894138dccb` FOREIGN KEY (`profileId`) REFERENCES `profile`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` ADD CONSTRAINT `FK_948caf9f9a1e21ad28f3034d05c` FOREIGN KEY (`permissionWsId`) REFERENCES `permission_ws`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` DROP FOREIGN KEY `FK_948caf9f9a1e21ad28f3034d05c`");
        await queryRunner.query("ALTER TABLE `profile_permissions_ws_permission_ws` DROP FOREIGN KEY `FK_fb0faa2637a409f52894138dccb`");
        await queryRunner.query("ALTER TABLE `permission_ws` DROP FOREIGN KEY `FK_27d0cd189e7ccee7b5adf174ba4`");
        await queryRunner.query("ALTER TABLE `user` DROP FOREIGN KEY `FK_9466682df91534dd95e4dbaa616`");
        await queryRunner.query("DROP INDEX `IDX_948caf9f9a1e21ad28f3034d05` ON `profile_permissions_ws_permission_ws`");
        await queryRunner.query("DROP INDEX `IDX_fb0faa2637a409f52894138dcc` ON `profile_permissions_ws_permission_ws`");
        await queryRunner.query("DROP TABLE `profile_permissions_ws_permission_ws`");
        await queryRunner.query("DROP TABLE `http_method`");
        await queryRunner.query("DROP TABLE `permission_ws`");
        await queryRunner.query("DROP TABLE `profile`");
        await queryRunner.query("DROP INDEX `IDX_9466682df91534dd95e4dbaa61` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
