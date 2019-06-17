import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { Report } from '../entity/Report';
/************CONFIG CLASS**************** */
const myClass = Report
/**************************************** */
export class ReportRepository extends GenericRepository<Report>{

    public getRepository(): Repository<Report> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}