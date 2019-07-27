import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { JoinReport } from '../entity/JoinReport';
/************CONFIG CLASS**************** */
const myClass = JoinReport
/**************************************** */
export class JoinReportRepository/**config */ extends GenericRepository<JoinReport/**config */>{

    public getRepository(): Repository<JoinReport/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}