import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { Horario } from '../entity/Horario';
import { ListaRonda } from '../entity/ListaRonda';
/************CONFIG CLASS**************** */
const myClass = ListaRonda
/**************************************** */

export class ListaRondaRepository/**config */ extends GenericRepository<ListaRonda/**config */>{
    public getRepository(): Repository<ListaRonda/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}