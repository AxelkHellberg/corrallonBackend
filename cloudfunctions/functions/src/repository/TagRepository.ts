import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { Planta } from '../entity/Planta';
import { Equipamiento } from '../entity/Equipamiento';
import { Tag } from '../entity/Tag';
/************CONFIG CLASS**************** */
const myClass = Tag
/**************************************** */

export class TagRepository/**config */ extends GenericRepository<Tag/**config */>{
    public getRepository(): Repository<Tag/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}