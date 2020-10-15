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
exports.ValorCampoRondaService = void 0;
const GenericService_1 = require("./GenericService");
const ValorCampoRondaRepository_1 = require("../repository/ValorCampoRondaRepository");
const ErrorVDF_1 = require("../components/ErrorVDF");
const Msg_1 = require("../msg/Msg");
const CampoRondaService_1 = require("./CampoRondaService");
const RondaService_1 = require("./RondaService");
/****************Configuration******************** */
const myRepository = ValorCampoRondaRepository_1.ValorCampoRondaRepository;
/************************************* */
class ValorCampoRondaService /**config *//**config */  extends GenericService_1.GenericeService {
    constructor() {
        super(new myRepository());
    }
    save(newObj) {
        const _super = Object.create(null, {
            save: { get: () => super.save }
        });
        return __awaiter(this, void 0, void 0, function* () {
            if (newObj.campoRondaId == null)
                throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("campoRondaId"), Msg_1.Msg.CAMPO_OBLIGATORIO("campoRondaId"), 400);
            if (newObj.rondaId == null)
                throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.CAMPO_OBLIGATORIO("rondaId"), Msg_1.Msg.CAMPO_OBLIGATORIO("rondaId"), 400);
            const campoRondaService = new CampoRondaService_1.CampoRondaService();
            const campoRonda = yield campoRondaService.findById(newObj.campoRondaId);
            const rondaService = new RondaService_1.RondaService();
            const ronda = yield rondaService.findById(newObj.rondaId);
            if (campoRonda.plantillaRondaId != ronda.plantillaRondaId)
                throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.PLANTILLA_GUIAS_DISTINTAS, Msg_1.Msg.PLANTILLA_GUIAS_DISTINTAS, 400);
            const valorCampoRonda = yield this.find({ "q": "rondaId=" + newObj.rondaId + " and campoRondaId=" + newObj.campoRondaId });
            if (valorCampoRonda.length > 0)
                throw new ErrorVDF_1.ErrorVDF(Msg_1.Msg.reemplazarCampos(Msg_1.Msg.VALOR_YA_ASIGNADO, [newObj.rondaId, newObj.campoRondaId, valorCampoRonda[0].id]), Msg_1.Msg.reemplazarCampos(Msg_1.Msg.VALOR_YA_ASIGNADO, [newObj.rondaId, newObj.campoRondaId, valorCampoRonda[0].id]), 400);
            newObj.valorNormal = campoRonda.valorNormal;
            return _super.save.call(this, newObj);
        });
    }
}
exports.ValorCampoRondaService = ValorCampoRondaService;
//# sourceMappingURL=ValorCampoRondaService.js.map