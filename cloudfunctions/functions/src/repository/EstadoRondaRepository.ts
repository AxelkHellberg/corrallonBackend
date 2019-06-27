import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { Planta } from '../entity/Planta';
import { Equipamiento } from '../entity/Equipamiento';
import { EstadoRonda } from '../entity/EstadoRonda';
/************CONFIG CLASS**************** */
const myClass = EstadoRonda
/**************************************** */

export class EstadoRondaRepository/**config */ extends GenericRepository<EstadoRonda/**config */>{
    public getRepository(): Repository<EstadoRonda/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}