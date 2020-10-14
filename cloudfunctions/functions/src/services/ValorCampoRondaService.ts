import { GenericeService } from "./GenericService";
import { UnidadMedida } from "../entity/UnidadMedida";
import { UnidadMedidaRepository } from "../repository/UnidadMedidaRepository";
import { ValorCampoRonda } from "../entity/ValorCampoRonda";
import { ValorCampoRondaRepository } from "../repository/ValorCampoRondaRepository";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/Msg";
import { CampoRondaService } from "./CampoRondaService";
import { CampoRonda } from "../entity/CampoRonda";
import { RondaService } from "./RondaService";
import { Ronda } from "../entity/Ronda";

/****************Configuration******************** */
const myRepository = ValorCampoRondaRepository
/************************************* */
export class ValorCampoRondaService/**config */ extends GenericeService<ValorCampoRonda/**config */> {
    constructor() {
        super(new myRepository())
    }

    public async save(newObj: ValorCampoRonda): Promise<ValorCampoRonda> {
        if (newObj.campoRondaId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("campoRondaId"), Msg.CAMPO_OBLIGATORIO("campoRondaId"), 400)
        if (newObj.rondaId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("rondaId"), Msg.CAMPO_OBLIGATORIO("rondaId"), 400)
        const campoRondaService = new CampoRondaService()
        const campoRonda: CampoRonda = await campoRondaService.findById(newObj.campoRondaId)
        const rondaService: RondaService = new RondaService()
        const ronda: Ronda = await rondaService.findById(newObj.rondaId)
        if (campoRonda.plantillaRondaId != ronda.plantillaRondaId)
            throw new ErrorVDF(Msg.PLANTILLA_GUIAS_DISTINTAS, Msg.PLANTILLA_GUIAS_DISTINTAS, 400)
        const valorCampoRonda: ValorCampoRonda[] = await this.find({ "q": "rondaId=" + newObj.rondaId + " and campoRondaId=" + newObj.campoRondaId })
        if (valorCampoRonda.length > 0)
            throw new ErrorVDF(Msg.reemplazarCampos(Msg.VALOR_YA_ASIGNADO, [newObj.rondaId, newObj.campoRondaId, valorCampoRonda[0].id]), Msg.reemplazarCampos(Msg.VALOR_YA_ASIGNADO, [newObj.rondaId, newObj.campoRondaId, valorCampoRonda[0].id]), 400)
        newObj.valorNormal = campoRonda.valorNormal
        return super.save(newObj)
    }
}