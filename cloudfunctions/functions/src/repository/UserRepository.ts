import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository, Not } from 'typeorm';
import { ErrorVDF } from '../components/ErrorVDF';
import { Msg } from '../msg/msg';
let encriptutils = require('../components/encryputils')
/************CONFIG CLASS**************** */
const myClass = User
/**************************************** */
export class UserRepository/**config */ extends GenericRepository<User/**config */>{

    existeUsernameToInsert = async function (username): Promise<boolean> {
        const user: User = await this.getRepository().findOne({ where: { "username": username } });
        return user != null
    }

    existeUsernameToUpdate = async function (username, id): Promise<boolean> {
        const user: User = await this.getRepository().findOne({ where: { "username": username, "id": Not(id) } });
        return user != null
    }


    login = async function (username, password): Promise<User> {
        const user: User = await this.getRepository().findOne({ where: { "username": username, "password": encriptutils.encrypt(password) } });
        return user
    }

    public getRepository(): Repository<User> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }

    public async save(newObj: User): Promise<User/**config */> {
        if (await this.existeUsernameToInsert(newObj.username))
            throw new ErrorVDF(Msg.USERNAME_DUPLICATED, Msg.USERNAME_DUPLICATED, 400)
        newObj.profileId = 2
        return super.save(newObj)
    }

    public async updateById(data: any, id: number): Promise<any> {
        if (data.username != null && await this.existeUsernameToUpdate(data.username, id))
            throw new ErrorVDF(Msg.USERNAME_DUPLICATED, Msg.USERNAME_DUPLICATED, 400)
        return super.updateById(data, id)
    }
}