import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { LecturaTag } from '../entity/LecturaTag';
/************CONFIG CLASS**************** */
const myClass = LecturaTag
/**************************************** */

export class LecturaTagRepository/**config */ extends GenericRepository<LecturaTag/**config */>{
    public getRepository(): Repository<LecturaTag/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}