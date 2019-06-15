import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { getRepository, Repository } from 'typeorm';
import { ErrorVDF } from '../components/ErrorVDF';
import { Msg } from '../msg/msg';
import { UserRepository } from '../repository/UserRepository';
import { GenericRepository } from '../repository/GenericRepository';
import { GenericeService } from './GenericService';
let encriptutils = require('../components/encryputils')

const myClass = UserRepository


export class UserService extends GenericeService<User> {
    constructor() {
        super(new myClass())
    }

    login = async function (username, password): Promise<User> {
        return await this.genericRepository.login(username, password);
    }


    public async hasPermissions(idUser: number, path: string, idHttp: number): Promise<boolean> {
        let u: User = await this.genericRepository.getRepository().createQueryBuilder("user")
            .leftJoinAndSelect("user.profile", "profile")
            .leftJoinAndSelect("profile.permissionsWS", "permissionsWS")
            .leftJoinAndSelect("permissionsWS.httpMethod", "httpMethod")
            .where("user.id = :idUser and  :path REGEXP  permissionsWS.servicePath and httpMethod.id = :idHttp", { idUser, path, idHttp })
            //            .where("user.id = :id and  :path LIKE '/users/__%' ", { id: 2, path: "/users/" })
            .getOne();
        return u != null
    }



}