import { MigrationInterface, QueryRunner } from "typeorm";

export class camposNullablesReport1563041783328 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `estado_falla` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `posicion` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `historial_estado_falla` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `estadoFallaId` int NOT NULL, `notificacionFallaId` int NOT NULL, INDEX `IDX_65d6c030adf114039dcaa4c3f1` (`estadoFallaId`), INDEX `IDX_f6493f4f7ef2a3e00d24db58f1` (`notificacionFallaId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `falla_sistema` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `sistemaId` int NOT NULL, `notificacionFallaId` int NOT NULL, INDEX `IDX_60ba0570af415001558925cc4d` (`sistemaId`), INDEX `IDX_75c595f31faa8520de4d28d2b6` (`notificacionFallaId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `notificacion_falla` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `descripcion` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `falla_equipamiento` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `equipamientoId` int NOT NULL, `notificacionFallaId` int NOT NULL, INDEX `IDX_074315a765e04c02adcd35e0be` (`equipamientoId`), INDEX `IDX_aca580a2b206373cb84abd8847` (`notificacionFallaId`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tipo_falla` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `posicion` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `report` CHANGE `where` `where` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `report` CHANGE `select` `select` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `historial_estado_falla` ADD CONSTRAINT `FK_65d6c030adf114039dcaa4c3f19` FOREIGN KEY (`estadoFallaId`) REFERENCES `estado_falla`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `historial_estado_falla` ADD CONSTRAINT `FK_f6493f4f7ef2a3e00d24db58f1d` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `falla_sistema` ADD CONSTRAINT `FK_60ba0570af415001558925cc4d0` FOREIGN KEY (`sistemaId`) REFERENCES `sistema`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `falla_sistema` ADD CONSTRAINT `FK_75c595f31faa8520de4d28d2b6f` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `falla_equipamiento` ADD CONSTRAINT `FK_074315a765e04c02adcd35e0be8` FOREIGN KEY (`equipamientoId`) REFERENCES `equipamiento`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `falla_equipamiento` ADD CONSTRAINT `FK_aca580a2b206373cb84abd8847e` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `falla_equipamiento` DROP FOREIGN KEY `FK_aca580a2b206373cb84abd8847e`");
        await queryRunner.query("ALTER TABLE `falla_equipamiento` DROP FOREIGN KEY `FK_074315a765e04c02adcd35e0be8`");
        await queryRunner.query("ALTER TABLE `falla_sistema` DROP FOREIGN KEY `FK_75c595f31faa8520de4d28d2b6f`");
        await queryRunner.query("ALTER TABLE `falla_sistema` DROP FOREIGN KEY `FK_60ba0570af415001558925cc4d0`");
        await queryRunner.query("ALTER TABLE `historial_estado_falla` DROP FOREIGN KEY `FK_f6493f4f7ef2a3e00d24db58f1d`");
        await queryRunner.query("ALTER TABLE `historial_estado_falla` DROP FOREIGN KEY `FK_65d6c030adf114039dcaa4c3f19`");
        await queryRunner.query("ALTER TABLE `report` CHANGE `select` `select` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `report` CHANGE `where` `where` varchar(255) NOT NULL");
        await queryRunner.query("DROP TABLE `tipo_falla`");
        await queryRunner.query("DROP INDEX `IDX_aca580a2b206373cb84abd8847` ON `falla_equipamiento`");
        await queryRunner.query("DROP INDEX `IDX_074315a765e04c02adcd35e0be` ON `falla_equipamiento`");
        await queryRunner.query("DROP TABLE `falla_equipamiento`");
        await queryRunner.query("DROP TABLE `notificacion_falla`");
        await queryRunner.query("DROP INDEX `IDX_75c595f31faa8520de4d28d2b6` ON `falla_sistema`");
        await queryRunner.query("DROP INDEX `IDX_60ba0570af415001558925cc4d` ON `falla_sistema`");
        await queryRunner.query("DROP TABLE `falla_sistema`");
        await queryRunner.query("DROP INDEX `IDX_f6493f4f7ef2a3e00d24db58f1` ON `historial_estado_falla`");
        await queryRunner.query("DROP INDEX `IDX_65d6c030adf114039dcaa4c3f1` ON `historial_estado_falla`");
        await queryRunner.query("DROP TABLE `historial_estado_falla`");
        await queryRunner.query("DROP TABLE `estado_falla`");
    }

}
