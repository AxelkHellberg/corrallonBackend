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
class valorCampoGuiaManiobra1564074247269 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` CHANGE `notificacionFallaId` `notificacionFallaId` int NULL");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_d195f9af34594d79c8a356ebe42` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` DROP FOREIGN KEY `FK_d195f9af34594d79c8a356ebe42`");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` CHANGE `notificacionFallaId` `notificacionFallaId` int NOT NULL");
            yield queryRunner.query("ALTER TABLE `valor_campo_maniobra` ADD CONSTRAINT `FK_d195f9af34594d79c8a356ebe42` FOREIGN KEY (`notificacionFallaId`) REFERENCES `notificacion_falla`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        });
    }
}
exports.valorCampoGuiaManiobra1564074247269 = valorCampoGuiaManiobra1564074247269;
//# sourceMappingURL=1564074247269-valorCampoGuiaManiobra.js.map