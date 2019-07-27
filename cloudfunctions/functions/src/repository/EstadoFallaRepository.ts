import { GenericRepository } from './GenericRepository'; 
import { getRepository, Repository } from 'typeorm';
import { EstadoFalla } from '../entity/EstadoFalla';
/************CONFIG CLASS**************** */
const myClass = EstadoFalla
/**************************************** */

export class EstadoFallaRepository/**config */ extends GenericRepository<EstadoFalla/**config */>{
    public getRepository(): Repository<EstadoFalla/**config */> {
        return getRepository(myClass);
    }
    
    public getClass() {
        return myClass
    }
}