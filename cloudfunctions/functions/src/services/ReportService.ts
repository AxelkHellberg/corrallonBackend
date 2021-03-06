import { User } from '../entity/User';
import { GenericeService } from './GenericService';
import { ReportRepository } from '../repository/ReportRepository';
import { Report } from '../entity/Report';
import { DBConection } from '../config/DBConection';
import { getRepository } from 'typeorm';
import { JoinReport } from '../entity/JoinReport';
import { JoinType } from '../entity/JoinType';
/******************CONFIG CLASS************************** */
const myClass = ReportRepository
/******************************************************* */

export class ReportService/**config */ extends GenericeService<Report/**config */> {
    constructor() {
        super(new myClass())
    }

    public findById = async function (id: number): Promise<Report> {
        console.log("llege");
        //await this.genericRepository.getRepository().createQueryBuilder(DBConection.ENTITY_REF_NAME).innerJoinAndSelect("e.joinsReport", "joinReport").where(DBConection.ENTITY_REF_NAME + ".id=" + id).getOne()
        const res = await this.genericRepository.getRepository().createQueryBuilder(DBConection.ENTITY_REF_NAME).innerJoinAndSelect("e.joinsReport", "joinReport").where(DBConection.ENTITY_REF_NAME + ".id=" + id).getOne()
        return res
    }

    execute = async function (report: Report, params = {}): Promise<any> {
        let builder = await getRepository(report.from).createQueryBuilder(report.entityAlias == null ? DBConection.ENTITY_REF_NAME : report.entityAlias)
        if (report.where != null)
            builder = await builder.where(report.where, params)
        let joinsReport: JoinReport[] = report.joinsReport
        for (let i: number = 0; i < joinsReport.length; i++) {
            if (joinsReport[i].joinTypeId == JoinType.LEFT_JOIN_ID)
                builder = await builder.leftJoinAndSelect(joinsReport[i]["joinColumn"], joinsReport[i]["joinAlias"], joinsReport[i]["joinWhere"], params)
            else if (joinsReport[i].joinTypeId == JoinType.INNER_JOIN_ID)
                builder = await builder.innerJoin(joinsReport[i]["joinColumn"], joinsReport[i]["joinAlias"], joinsReport[i]["joinWhere"], params)
        }
        console.log(builder.getSql())
        let objs = await builder.getMany()
        return objs
    }
}