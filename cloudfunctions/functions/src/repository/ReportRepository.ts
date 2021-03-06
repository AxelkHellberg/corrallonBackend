import { getConnectionDatabase } from '../components/dbHandler';
import { User } from '../entity/User';
import { GenericRepository } from './GenericRepository';
import { getRepository, Repository } from 'typeorm';
import { Profile } from '../entity/Profile';
import { Report } from '../entity/Report';
/************CONFIG CLASS**************** */
const myClass = Report
/**************************************** */
export class ReportRepository/**config */ extends GenericRepository<Report/**config */>{

    public getRepository(): Repository<Report/**config */> {
        return getRepository(myClass);
    }

    public getClass() {
        return myClass
    }
}