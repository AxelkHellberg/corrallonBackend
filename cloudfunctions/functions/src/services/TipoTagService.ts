import { GenericeService } from './GenericService'; 
import { TipoTagRepository } from '../repository/TipoTagRepository';
import { TipoTag } from '../entity/TipoTag';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = TipoTagRepository
/******************************************************** */

export class TipoTagService/**config */ extends GenericeService<TipoTag/**config */> {
    constructor() {
        super(new myRepository())
    }
}