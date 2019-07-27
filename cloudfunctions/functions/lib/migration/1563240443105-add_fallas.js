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
class addFallas1563240443105 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `notificacion_falla` ADD `estadoFallaId` int NOT NULL");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` ADD `tipoFallaId` int NOT NULL");
            yield queryRunner.query("CREATE INDEX `IDX_afb5f65658b61e3b5b0fd93ff6` ON `notificacion_falla` (`estadoFallaId`)");
            yield queryRunner.query("CREATE INDEX `IDX_80f5626e7bfdf906d8561bafe3` ON `notificacion_falla` (`tipoFallaId`)");
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD CONSTRAINT `FK_ef86ccfcacb600d45b823aba6c8` FOREIGN KEY (`plantillaRondaId`) REFERENCES `plantilla_ronda`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` ADD CONSTRAINT `FK_afb5f65658b61e3b5b0fd93ff69` FOREIGN KEY (`estadoFallaId`) REFERENCES `estado_falla`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` ADD CONSTRAINT `FK_80f5626e7bfdf906d8561bafe39` FOREIGN KEY (`tipoFallaId`) REFERENCES `tipo_falla`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `notificacion_falla` DROP FOREIGN KEY `FK_80f5626e7bfdf906d8561bafe39`");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` DROP FOREIGN KEY `FK_afb5f65658b61e3b5b0fd93ff69`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP FOREIGN KEY `FK_ef86ccfcacb600d45b823aba6c8`");
            yield queryRunner.query("DROP INDEX `IDX_80f5626e7bfdf906d8561bafe3` ON `notificacion_falla`");
            yield queryRunner.query("DROP INDEX `IDX_afb5f65658b61e3b5b0fd93ff6` ON `notificacion_falla`");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` DROP COLUMN `tipoFallaId`");
            yield queryRunner.query("ALTER TABLE `notificacion_falla` DROP COLUMN `estadoFallaId`");
        });
    }
}
exports.addFallas1563240443105 = addFallas1563240443105;
//# sourceMappingURL=1563240443105-add_fallas.js.map