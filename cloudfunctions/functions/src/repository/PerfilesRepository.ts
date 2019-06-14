import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
export class ProlfileRepository extends GenericRepository<Profile>{

    public  getRepository():Repository<Profile>{
        return getRepository(Profile);     
    }

    public getClass(){
        return Profile
    }
}