import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { NotificacionFalla } from '../entity/NotificacionFalla';
/************CONFIG CLASS**************** */
const myClass = NotificacionFalla
/**************************************** */

export class NotificacionFallaRepository/**config */ extends GenericRepository<NotificacionFalla/**config */>{
    public getRepository(): Repository<NotificacionFalla/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}