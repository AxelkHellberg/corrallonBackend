import { MigrationInterface, QueryRunner } from "typeorm";

export class valoresCamposManiobraYNotifFalla1563413065103 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD `notificacionFallaId` int NOT NULL");
        await queryRunner.query("CREATE INDEX `IDX_d195f9af34594d79c8a356ebe4` ON `valor_campo_maniobra` (`notificacionFallaId`)");
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_d195f9af34594d79c8a356ebe42` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_d195f9af34594d79c8a356ebe42`");
        await queryRunner.query("DROP INDEX `IDX_d195f9af34594d79c8a356ebe4` ON `valor_campo_maniobra`");
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP COLUMN `notificacionFallaId`");
    }

}
