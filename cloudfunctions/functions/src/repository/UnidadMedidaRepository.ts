import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Equipamiento } from '../entity/Equipamiento';
import { UnidadMedida } from '../entity/UnidadMedida';
/************CONFIG CLASS**************** */
const myClass = UnidadMedida
/**************************************** */

export class UnidadMedidaRepository/**config */ extends GenericRepository<UnidadMedida/**config */>{
    public getRepository(): Repository<UnidadMedida/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}