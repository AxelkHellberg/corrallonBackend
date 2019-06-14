import { getConnectionDatabase } from "../components/dbHandler";
import { Repository } from "typeorm";


export abstract class GenericRepository<E>{


    public find = async function (): Promise<E[]> {
        const objs = await this.getRepository().find()
        return objs
    }

    public async updateById(data, id): Promise<any> {
        return await getConnectionDatabase().createQueryBuilder()
            .update(this.getClass())
            .set(data)
            .where("id = :id", { "id": id })
            .execute()
    }
    public async save(newObj: E): Promise<E> {
        return await getConnectionDatabase().manager.save(newObj)
    }
    public abstract getRepository(): Repository<E>
    public abstract getClass()

}
