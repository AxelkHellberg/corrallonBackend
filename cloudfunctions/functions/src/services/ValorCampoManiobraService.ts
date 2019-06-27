import { GenericeService } from "./GenericService";
import { ValorCampoManiobraRepository } from "../repository/ValorCampoManiobraRepository";
import { ValorCampoManiobra } from "../entity/ValorCampoManiobra";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { CampoManiobraService } from "./CamposManiobraService";
import { CampoManiobra } from "../entity/CampoManiobra";
import { GuiaManiobraService } from "./GuiaManiobraService";
import { GuiaManiobra } from "../entity/GuiaManiobra";

/****************Configuration******************** */
const myRepository = ValorCampoManiobraRepository
/************************************* */
export class ValorCampoManiobraService/**config */ extends GenericeService<ValorCampoManiobra/**config */> {
    constructor() {
        super(new myRepository())
    }

    public async save(newObj: ValorCampoManiobra): Promise<ValorCampoManiobra> {
        if (newObj.campoManiobraId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("CampoManiobraId"), Msg.CAMPO_OBLIGATORIO("CampoManiobraId"), 400)
        if (newObj.guiaManiobraId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("guiaManiobraId"), Msg.CAMPO_OBLIGATORIO("guiaManiobraId"), 400)
        const campoManiobraService = new CampoManiobraService()
        const campoManiobra: CampoManiobra = await campoManiobraService.findById(newObj.campoManiobraId)
        const guiaManiobraServce: GuiaManiobraService = new GuiaManiobraService()
        const guitaManiobra: GuiaManiobra = await guiaManiobraServce.findById(newObj.guiaManiobraId)
        if (campoManiobra.plantillaGuiaManiobraId != guitaManiobra.plantillaGuiaManiobraId)
            throw new ErrorVDF(Msg.PLANTILLA_GUIAS_DISTINTAS, Msg.PLANTILLA_GUIAS_DISTINTAS, 400)
        const valorCampoManiobra: ValorCampoManiobra[] = await this.find({ "q": "guiaManiobraId=" + newObj.guiaManiobraId + " and CampoManiobraId=" + newObj.campoManiobraId })
        if (valorCampoManiobra.length > 0)
            throw new ErrorVDF(Msg.reemplazarCampos(Msg.VALOR_YA_ASIGNADO, [newObj.guiaManiobraId, newObj.campoManiobraId, valorCampoManiobra[0].id]), Msg.reemplazarCampos(Msg.VALOR_YA_ASIGNADO, [newObj.guiaManiobraId, newObj.campoManiobraId, valorCampoManiobra[0].id]), 400)
        newObj.valorNormal = campoManiobra.valorNormal
        return super.save(newObj)
    }
}