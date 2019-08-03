import { MigrationInterface, QueryRunner } from "typeorm";

export class valorCampoGuiaManiobra1564074247269 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` CHANGE `notificacionFallaId` `notificacionFallaId` int NULL");
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_d195f9af34594d79c8a356ebe42` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_d195f9af34594d79c8a356ebe42`");
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` CHANGE `notificacionFallaId` `notificacionFallaId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_d195f9af34594d79c8a356ebe42` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

}
