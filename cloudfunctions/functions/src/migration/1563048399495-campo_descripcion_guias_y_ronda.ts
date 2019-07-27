import {MigrationInterface, QueryRunner} from "typeorm";

export class campoDescripcionGuiasYRonda1563048399495 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `campo_ronda` ADD `descripcion` text NOT NULL");
        await queryRunner.query("ALTER TABLE `campo_maniobra` ADD `descripcion` text NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `campo_maniobra` DROP COLUMN `descripcion`");
        await queryRunner.query("ALTER TABLE `campo_ronda` DROP COLUMN `descripcion`");
    }

}
