import {MigrationInterface, QueryRunner} from "typeorm";

export class alter21561493286446 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_d6db1488d24991a167f65eb1889`");
        await queryRunner.query("DROP INDEX `IDX_d6db1488d24991a167f65eb188` ON `valor_campo_maniobra`");
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` CHANGE `CampoManiobraId` `campoManiobraId` int NOT NULL");
        await queryRunner.query("CREATE TABLE `estado_ronda` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `posicion` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `horario` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `hora` int NOT NULL, `minuto` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `tipo_campo_ronda` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `lista` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `unidad_medida` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE INDEX `IDX_892036c32838dd214367300e80` ON `valor_campo_maniobra` (`campoManiobraId`)");
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_892036c32838dd214367300e80c` FOREIGN KEY (`campoManiobraId`) REFERENCES `campo_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_892036c32838dd214367300e80c`");
        await queryRunner.query("DROP INDEX `IDX_892036c32838dd214367300e80` ON `valor_campo_maniobra`");
        await queryRunner.query("DROP TABLE `unidad_medida`");
        await queryRunner.query("DROP TABLE `tipo_campo_ronda`");
        await queryRunner.query("DROP TABLE `horario`");
        await queryRunner.query("DROP TABLE `estado_ronda`");
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` CHANGE `campoManiobraId` `CampoManiobraId` int NOT NULL");
        await queryRunner.query("CREATE INDEX `IDX_d6db1488d24991a167f65eb188` ON `valor_campo_maniobra` (`CampoManiobraId`)");
        await queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_d6db1488d24991a167f65eb1889` FOREIGN KEY (`CampoManiobraId`) REFERENCES `campo_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
