import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository, Not, getConnection } from 'typeorm';
import { ErrorVDF } from '../components/ErrorVDF';
import { Msg } from '../msg/Msg';
import { user } from 'firebase-functions/lib/providers/auth';
let encriptutils = require('../components/encryputils')
/************CONFIG CLASS**************** */
const myClass = User
/**************************************** */
export class UserRepository/**config */ extends GenericRepository<User/**config */>{

    existeUsernameToInsert = async function (username): Promise<boolean> {
        const user: User = await this.getRepository().findOne({ where: { "LoginName": username } });
        return user != null
    }

    existeUsernameToUpdate = async function (username, id): Promise<boolean> {
        const user: User = await this.getRepository().findOne({ where: { "LoginName": username, "id": Not(id) } });
        return user != null
    }

/*     login = async function (username, password): Promise<Users> {
        const user: Users = await this.getRepository().findOne({ where: { "LoginName": username, "Password": encriptutils.encrypt(password) } });
        return user
    } */
    login = async function (username, password): Promise<User> {
        const user = await getConnection().query("SELECT * FROM users WHERE LoginName='" +username+ "' and Password=" +password);
        return user
    }

    public getRepository(): Repository<User> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }

    public async save(newObj: User): Promise<User/**config */> {
        if (await this.existeUsernameToInsert(newObj.LoginName))
            throw new ErrorVDF(Msg.USERNAME_DUPLICATED, Msg.USERNAME_DUPLICATED, 400)
        return super.save(newObj)
    }

    public async updateById(data: any, id: number): Promise<any> {
        if (data.username != null && await this.existeUsernameToUpdate(data.username, id))
            throw new ErrorVDF(Msg.USERNAME_DUPLICATED, Msg.USERNAME_DUPLICATED, 400)
        return super.updateById(data, id)
    }

/*     public async delete(delObj: User): Promise<any> {
        if (delObj.id == 1){
            throw new ErrorVDF(Msg.USUARIO_ADMINISTRADOR_NO_ELIMINABLE,Msg.USUARIO_ADMINISTRADOR_NO_ELIMINABLE, 400)
        }
        return super.delete(delObj);
    } */

}