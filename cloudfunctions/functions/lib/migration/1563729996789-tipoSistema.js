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
class tipoSistema1563729996789 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            //await queryRunner.query("CREATE TABLE `tipo_sistema` (`createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `id` int NOT NULL AUTO_INCREMENT, `nombre` varchar(255) NOT NULL, `posicion` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
            //await queryRunner.query("ALTER TABLE `sistema` ADD `tipoSistemaId` int NOT NULL");
            //        await queryRunner.query("ALTER TABLE `sistema` ADD CONSTRAINT `FK_533c4bff07390c95b41825e153b` FOREIGN KEY (`tipoSistemaId`) REFERENCES `tipo_sistema`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            //   await queryRunner.query("ALTER TABLE `sistema` DROP FOREIGN KEY `FK_533c4bff07390c95b41825e153b`");
            yield queryRunner.query("ALTER TABLE `sistema` DROP COLUMN `tipoSistemaId`");
            yield queryRunner.query("DROP TABLE `tipo_sistema`");
        });
    }
}
exports.tipoSistema1563729996789 = tipoSistema1563729996789;
//# sourceMappingURL=1563729996789-tipoSistema.js.map