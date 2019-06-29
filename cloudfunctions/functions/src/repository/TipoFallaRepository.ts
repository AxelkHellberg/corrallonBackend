import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { HistorialEstadoFalla } from '../entity/HistorialEstadoFalla';
import { TipoFalla } from '../entity/TipoFalla';
/************CONFIG CLASS**************** */
const myClass = TipoFalla
/**************************************** */

export class TipoFallaRepository/**config */ extends GenericRepository<TipoFalla/**config */>{
    public getRepository(): Repository<TipoFalla/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}