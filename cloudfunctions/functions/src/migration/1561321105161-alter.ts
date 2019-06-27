import {MigrationInterface, QueryRunner} from "typeorm";

export class alter1561321105161 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_8e97b26b2a8baddad3e139b0b78`");
        await queryRunner.query("DROP INDEX `IDX_8e97b26b2a8baddad3e139b0b7` ON `guia_maniobra`");
        await queryRunner.query("ALTER TABLE `guia_maniobra` DROP COLUMN `guiaManiobraId`");
        await queryRunner.query("ALTER TABLE `guia_maniobra` ADD `userId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `guia_maniobra` ADD `plantillaGuiaManiobraId` int NOT NULL");
        await queryRunner.query("CREATE INDEX `IDX_65151f89d033dcc808d3e04c47` ON `guia_maniobra` (`userId`)");
        await queryRunner.query("CREATE INDEX `IDX_d09e6c8cdaf2b8d17ccd4c4b00` ON `guia_maniobra` (`plantillaGuiaManiobraId`)");
        await queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_65151f89d033dcc808d3e04c477` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_d09e6c8cdaf2b8d17ccd4c4b009` FOREIGN KEY (`plantillaGuiaManiobraId`) REFERENCES `plantilla_guia_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_d09e6c8cdaf2b8d17ccd4c4b009`");
        await queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_65151f89d033dcc808d3e04c477`");
        await queryRunner.query("DROP INDEX `IDX_d09e6c8cdaf2b8d17ccd4c4b00` ON `guia_maniobra`");
        await queryRunner.query("DROP INDEX `IDX_65151f89d033dcc808d3e04c47` ON `guia_maniobra`");
        await queryRunner.query("ALTER TABLE `guia_maniobra` DROP COLUMN `plantillaGuiaManiobraId`");
        await queryRunner.query("ALTER TABLE `guia_maniobra` DROP COLUMN `userId`");
        await queryRunner.query("ALTER TABLE `guia_maniobra` ADD `guiaManiobraId` int NOT NULL");
        await queryRunner.query("CREATE INDEX `IDX_8e97b26b2a8baddad3e139b0b7` ON `guia_maniobra` (`guiaManiobraId`)");
        await queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_8e97b26b2a8baddad3e139b0b78` FOREIGN KEY (`guiaManiobraId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
