import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { getRepository, Repository } from 'typeorm';
import { ErrorVDF } from '../components/ErrorVDF';
import { Msg } from '../msg/Msg';
import { UserRepository } from '../repository/UserRepository';
import { GenericRepository } from '../repository/GenericRepository';
let encriptutils = require('../components/encryputils')

export abstract class GenericeService<E> {
    protected genericRepository: GenericRepository<E>

    constructor(repository) {
        this.genericRepository = repository
    }

    public async find(params: any = {}): Promise<E[]> {
        return await this.genericRepository.find(params)
    }

    public async findById(id: number): Promise<E> {
        return await this.genericRepository.findById(id)
    }

    public async delete(obj: E): Promise<E> {
        return await this.genericRepository.delete(obj)
    }


    public async deleteWhere(where: string): Promise<E> {
        return await this.genericRepository.deleteWhere(where)
    }

    public async updateById(data, id) {
        return await this.genericRepository.updateById(data, id)
    }
    public async save(newObj: E): Promise<E> {
        return await this.genericRepository.save(newObj)
    }
}