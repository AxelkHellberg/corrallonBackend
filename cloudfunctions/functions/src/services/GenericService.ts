import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { getRepository, Repository } from 'typeorm';
import { ErrorVDF } from '../components/ErrorVDF';
import { Msg } from '../msg/msg';
import { UserRepository } from '../repository/UserRepository';
import { GenericRepository } from '../repository/GenericRepository';
let encriptutils = require('../components/encryputils')

export abstract class GenericeService<E> {
    protected genericRepository: GenericRepository<E>

    constructor(repository) {
        this.genericRepository = repository
    }

    public find = async function (): Promise<E[]> {
        const objs = await this.genericRepository.find()
        return objs
    }

    public async updateById(data, id) {
        return await this.genericRepository.updateById(data, id)
    }
    public async save(newObj: E) {
        return await this.genericRepository.save(newObj)
    }
}