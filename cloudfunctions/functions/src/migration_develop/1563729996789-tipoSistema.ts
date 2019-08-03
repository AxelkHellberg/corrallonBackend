import { MigrationInterface, QueryRunner } from "typeorm";

export class tipoSistema1563729996789 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        //await queryRunner.query("CREATE TABLE `tipo_sistema` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `posicion` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        //await queryRunner.query("ALTER TABLE `sistema` ADD `tipoSistemaId` int NOT NULL");
        //        await queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_533c4bff07390c95b41825e153b` FOREIGN KEY (`tipoSistemaId`) REFERENCES `tipo_sistema`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        //   await queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_533c4bff07390c95b41825e153b`");
        await queryRunner.query("ALTER TABLE `sistema` DROP COLUMN `tipoSistemaId`");
        await queryRunner.query("DROP TABLE `tipo_sistema`");
    }

}
