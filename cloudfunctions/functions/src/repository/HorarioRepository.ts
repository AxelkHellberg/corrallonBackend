import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Horario } from '../entity/Horario';

/************CONFIG CLASS**************** */
const myClass = Horario
/**************************************** */

export class HorarioRepository/**config */ extends GenericRepository<Horario/**config */>{
    public getRepository(): Repository<Horario/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }

}