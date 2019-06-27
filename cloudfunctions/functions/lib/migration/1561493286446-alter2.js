"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class alter21561493286446 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_d6db1488d24991a167f65eb1889`");
            yield queryRunner.query("DROP INDEX `IDX_d6db1488d24991a167f65eb188` ON `valor_campo_maniobra`");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` CHANGE `CampoManiobraId` `campoManiobraId` int NOT NULL");
            yield queryRunner.query("CREATE TABLE `estado_ronda` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `posicion` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `horario` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `hora` int NOT NULL, `minuto` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `tipo_campo_ronda` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `lista` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE TABLE `unidad_medida` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            yield queryRunner.query("CREATE INDEX `IDX_892036c32838dd214367300e80` ON `valor_campo_maniobra` (`campoManiobraId`)");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_892036c32838dd214367300e80c` FOREIGN KEY (`campoManiobraId`) REFERENCES `campo_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_892036c32838dd214367300e80c`");
            yield queryRunner.query("DROP INDEX `IDX_892036c32838dd214367300e80` ON `valor_campo_maniobra`");
            yield queryRunner.query("DROP TABLE `unidad_medida`");
            yield queryRunner.query("DROP TABLE `tipo_campo_ronda`");
            yield queryRunner.query("DROP TABLE `horario`");
            yield queryRunner.query("DROP TABLE `estado_ronda`");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` CHANGE `campoManiobraId` `CampoManiobraId` int NOT NULL");
            yield queryRunner.query("CREATE INDEX `IDX_d6db1488d24991a167f65eb188` ON `valor_campo_maniobra` (`CampoManiobraId`)");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_d6db1488d24991a167f65eb1889` FOREIGN KEY (`CampoManiobraId`) REFERENCES `campo_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        });
    }
}
exports.alter21561493286446 = alter21561493286446;
//# sourceMappingURL=1561493286446-alter2.js.map