import { GenericeService } from './GenericService'; 
import { FallaSistemaRepository } from '../repository/FallaSistemaRepository';
import { FallaSistema } from '../entity/FallaSistema';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = FallaSistemaRepository
/******************************************************** */

export class FallaSistemaService/**config */ extends GenericeService<FallaSistema/**config */> {
    constructor() {
        super(new myRepository())
    }
}