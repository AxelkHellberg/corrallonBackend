import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
/************CONFIG CLASS**************** */
const myClass = Profile
/**************************************** */

export class ProlfileRepository extends GenericRepository<Profile/**config */>{
    public getRepository(): Repository<Profile/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}