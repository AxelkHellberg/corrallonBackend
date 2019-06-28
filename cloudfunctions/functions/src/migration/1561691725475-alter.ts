import {MigrationInterface, QueryRunner} from "typeorm";

export class alter1561691725475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `campo_ronda` ADD `plantillaRondaId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `ronda` CHANGE `tiempoRondaMinutos` `tiempoRondaMinutos` int NULL");
        await queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_ef86ccfcacb600d45b823aba6c8` FOREIGN KEY (`plantillaRondaId`) REFERENCES `plantilla_ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_ef86ccfcacb600d45b823aba6c8`");
        await queryRunner.query("ALTER TABLE `ronda` CHANGE `tiempoRondaMinutos` `tiempoRondaMinutos` int NOT NULL");
        await queryRunner.query("ALTER TABLE `campo_ronda` DROP COLUMN `plantillaRondaId`");
    }

}
