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
class alter1561691725475 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD `plantillaRondaId` int NOT NULL");
            yield queryRunner.query("ALTER TABLE `ronda` CHANGE `tiempoRondaMinutos` `tiempoRondaMinutos` int NULL");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_ef86ccfcacb600d45b823aba6c8` FOREIGN KEY (`plantillaRondaId`) REFERENCES `plantilla_ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_ef86ccfcacb600d45b823aba6c8`");
            yield queryRunner.query("ALTER TABLE `ronda` CHANGE `tiempoRondaMinutos` `tiempoRondaMinutos` int NOT NULL");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP COLUMN `plantillaRondaId`");
        });
    }
}
exports.alter1561691725475 = alter1561691725475;
//# sourceMappingURL=1561691725475-alter.js.map