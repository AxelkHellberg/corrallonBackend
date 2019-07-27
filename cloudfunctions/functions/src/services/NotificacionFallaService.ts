import { GenericeService } from './GenericService'; 
import { NotificacionFallaRepository } from '../repository/NotificacionFallaRepository';
import { NotificacionFalla } from '../entity/NotificacionFalla';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = NotificacionFallaRepository
/******************************************************** */

export class NotificacionFallaService/**config */ extends GenericeService<NotificacionFalla/**config */> {
    constructor() {
        super(new myRepository())
    }
}