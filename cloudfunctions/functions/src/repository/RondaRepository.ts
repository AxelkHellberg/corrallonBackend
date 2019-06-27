import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { Report } from '../entity/Report';
import { Ronda } from '../entity/Ronda';
/************CONFIG CLASS**************** */
const myClass = Ronda
/**************************************** */
export class RondaRepository/**config */ extends GenericRepository<Ronda/**config */>{

    public getRepository(): Repository<Ronda/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}