import { MigrationInterface, QueryRunner } from "typeorm";

export class nulleable1561236944264 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_f5bd69e6cc4c55f3db21b409b1c`");
        await queryRunner.query("ALTER TABLE `sistema` CHANGE `tagId` `tagId` int NULL");
        await queryRunner.query("ALTER TABLE `equipamiento` DROP FOREIGN KEY `FK_79bb5e7eb4b0ce1f88b83be8225`");
        await queryRunner.query("ALTER TABLE `equipamiento` CHANGE `tagId` `tagId` int NULL");
        await queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_f5bd69e6cc4c55f3db21b409b1c` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `equipamiento` ADD CONSTRAINT `FK_79bb5e7eb4b0ce1f88b83be8225` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `permissionReport` DROP FOREIGN KEY `FK_ae822892a2f1826a86c727c6c02`");
        await queryRunner.query("ALTER TABLE `permissionReport` DROP FOREIGN KEY `FK_bd8c3134ac815216543ba167c83`");
        await queryRunner.query("ALTER TABLE `equipamiento` DROP FOREIGN KEY `FK_79bb5e7eb4b0ce1f88b83be8225`");
        await queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_f5bd69e6cc4c55f3db21b409b1c`");
        await queryRunner.query("ALTER TABLE `equipamiento` CHANGE `tagId` `tagId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `equipamiento` ADD CONSTRAINT `FK_79bb5e7eb4b0ce1f88b83be8225` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `sistema` CHANGE `tagId` `tagId` int NOT NULL");
        await queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_f5bd69e6cc4c55f3db21b409b1c` FOREIGN KEY (`tagId`) REFERENCES `tag`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("DROP INDEX `IDX_ae822892a2f1826a86c727c6c0` ON `permissionReport`");
        await queryRunner.query("DROP INDEX `IDX_bd8c3134ac815216543ba167c8` ON `permissionReport`");
        await queryRunner.query("DROP TABLE `permissionReport`");
    }

}
