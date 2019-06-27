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
class alter1561321105161 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_8e97b26b2a8baddad3e139b0b78`");
            yield queryRunner.query("DROP INDEX `IDX_8e97b26b2a8baddad3e139b0b7` ON `guia_maniobra`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP COLUMN `guiaManiobraId`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD `userId` int NOT NULL");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD `plantillaGuiaManiobraId` int NOT NULL");
            yield queryRunner.query("CREATE INDEX `IDX_65151f89d033dcc808d3e04c47` ON `guia_maniobra` (`userId`)");
            yield queryRunner.query("CREATE INDEX `IDX_d09e6c8cdaf2b8d17ccd4c4b00` ON `guia_maniobra` (`plantillaGuiaManiobraId`)");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_65151f89d033dcc808d3e04c477` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_d09e6c8cdaf2b8d17ccd4c4b009` FOREIGN KEY (`plantillaGuiaManiobraId`) REFERENCES `plantilla_guia_maniobra`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_d09e6c8cdaf2b8d17ccd4c4b009`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP FOREIGN KEY `FK_65151f89d033dcc808d3e04c477`");
            yield queryRunner.query("DROP INDEX `IDX_d09e6c8cdaf2b8d17ccd4c4b00` ON `guia_maniobra`");
            yield queryRunner.query("DROP INDEX `IDX_65151f89d033dcc808d3e04c47` ON `guia_maniobra`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP COLUMN `plantillaGuiaManiobraId`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` DROP COLUMN `userId`");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD `guiaManiobraId` int NOT NULL");
            yield queryRunner.query("CREATE INDEX `IDX_8e97b26b2a8baddad3e139b0b7` ON `guia_maniobra` (`guiaManiobraId`)");
            yield queryRunner.query("ALTER TABLE `guia_maniobra` ADD CONSTRAINT `FK_8e97b26b2a8baddad3e139b0b78` FOREIGN KEY (`guiaManiobraId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        });
    }
}
exports.alter1561321105161 = alter1561321105161;
//# sourceMappingURL=1561321105161-alter.js.map