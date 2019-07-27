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
class campoDescripcionGuiasYRonda1563048399495 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `campo_ronda` ADD `descripcion` text NOT NULL");
            yield queryRunner.query("ALTER TABLE `campo_maniobra` ADD `descripcion` text NOT NULL");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `campo_maniobra` DROP COLUMN `descripcion`");
            yield queryRunner.query("ALTER TABLE `campo_ronda` DROP COLUMN `descripcion`");
        });
    }
}
exports.campoDescripcionGuiasYRonda1563048399495 = campoDescripcionGuiasYRonda1563048399495;
//# sourceMappingURL=1563048399495-campo_descripcion_guias_y_ronda.js.map