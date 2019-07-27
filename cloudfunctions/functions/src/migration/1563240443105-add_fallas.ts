import {MigrationInterface, QueryRunner} from "typeorm";

export class addFallas1563240443105 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `notificacion_falla` ADD `estadoFallaId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `notificacion_falla` ADD `tipoFallaId` int NOT NULL");
        await queryRunner.query("CREATE INDEX `IDX_afb5f65658b61e3b5b0fd93ff6` ON `notificacion_falla` (`estadoFallaId`)");
        await queryRunner.query("CREATE INDEX `IDX_80f5626e7bfdf906d8561bafe3` ON `notificacion_falla` (`tipoFallaId`)");
        await queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_ef86ccfcacb600d45b823aba6c8` FOREIGN KEY (`plantillaRondaId`) REFERENCES `plantilla_ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `notificacion_falla` ADD CONSTRAINT `FK_afb5f65658b61e3b5b0fd93ff69` FOREIGN KEY (`estadoFallaId`) REFERENCES `estado_falla`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `notificacion_falla` ADD CONSTRAINT `FK_80f5626e7bfdf906d8561bafe39` FOREIGN KEY (`tipoFallaId`) REFERENCES `tipo_falla`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `notificacion_falla` DROP FOREIGN KEY `FK_80f5626e7bfdf906d8561bafe39`");
        await queryRunner.query("ALTER TABLE `notificacion_falla` DROP FOREIGN KEY `FK_afb5f65658b61e3b5b0fd93ff69`");
        await queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_ef86ccfcacb600d45b823aba6c8`");
        await queryRunner.query("DROP INDEX `IDX_80f5626e7bfdf906d8561bafe3` ON `notificacion_falla`");
        await queryRunner.query("DROP INDEX `IDX_afb5f65658b61e3b5b0fd93ff6` ON `notificacion_falla`");
        await queryRunner.query("ALTER TABLE `notificacion_falla` DROP COLUMN `tipoFallaId`");
        await queryRunner.query("ALTER TABLE `notificacion_falla` DROP COLUMN `estadoFallaId`");
    }

}
