import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { HistorialEstadoFalla } from '../entity/HistorialEstadoFalla';
/************CONFIG CLASS**************** */
const myClass = HistorialEstadoFalla
/**************************************** */

export class HistorialEstadoFallaRepository/**config */ extends GenericRepository<HistorialEstadoFalla/**config */>{
    public getRepository(): Repository<HistorialEstadoFalla/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}