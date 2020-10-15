"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValorCampoManiobraService = void 0;
const GenericService_1 = require("./GenericService");
const ValorCampoManiobraRepository_1 = require("../repository/ValorCampoManiobraRepository");
const ErrorVDF_1 = require("../components/ErrorVDF");
const Msg_1 = require("../msg/Msg");
const CamposManiobraService_1 = require("./CamposManiobraService");
const GuiaManiobraService_1 = require("./GuiaManiobraService");
/****************Configuration******************** */
const myRepository = ValorCampoManiobraRepository_1.ValorCampoManiobraRepository;
/************************************* */
class ValorCampoManiobraService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
    save(newObj) {
        const _super = Object.create(null, {
            save: { get: () => super.save }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (newObj.campoManiobraId == null)
                throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("CampoManiobraId"), Msg_1.Msg.CAMPO_OBLIGATORIO("CampoManiobraId"), 400);
            if (newObj.guiaManiobraId == null)
                throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("guiaManiobraId"), Msg_1.Msg.CAMPO_OBLIGATORIO("guiaManiobraId"), 400);
            const campoManiobraService = new CamposManiobraService_1.CampoManiobraService();
            const campoManiobra = yield campoManiobraService.findById(newObj.campoManiobraId);
            const guiaManiobraServce = new GuiaManiobraService_1.GuiaManiobraService();
            const guitaManiobra = yield guiaManiobraServce.findById(newObj.guiaManiobraId);
            if (campoManiobra.plantillaGuiaManiobraId != guitaManiobra.plantillaGuiaManiobraId)
                throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.PLANTILLA_GUIAS_DISTINTAS, Msg_1.Msg.PLANTILLA_GUIAS_DISTINTAS, 400);
            const valorCampoManiobra = yield this.find({ "q": "guiaManiobraId=" + newObj.guiaManiobraId + " and CampoManiobraId=" + newObj.campoManiobraId });
            if (valorCampoManiobra.length > 0)
                throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.reemplazarCampos(Msg_1.Msg.VALOR_YA_ASIGNADO, [newObj.guiaManiobraId, newObj.campoManiobraId, valorCampoManiobra[0].id]), Msg_1.Msg.reemplazarCampos(Msg_1.Msg.VALOR_YA_ASIGNADO, [newObj.guiaManiobraId, newObj.campoManiobraId, valorCampoManiobra[0].id]), 400);
            newObj.valorNormal = campoManiobra.valorNormal;
            return _super.save.call(this, newObj);
        });
    }
}
exports.ValorCampoManiobraService = ValorCampoManiobraService;
//# sourceMappingURL=ValorCampoManiobraService.js.map