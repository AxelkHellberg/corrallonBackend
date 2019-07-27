import { GenericeService } from './GenericService'; 
import { TipoSistemaRepository } from '../repository/TipoSistemaRepository';
import { TipoSistema } from '../entity/TipoSistema';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = TipoSistemaRepository
/******************************************************** */

export class TipoSistemaService/**config */ extends GenericeService<TipoSistema/**config */> {
    constructor() {
        super(new myRepository())
    }
}