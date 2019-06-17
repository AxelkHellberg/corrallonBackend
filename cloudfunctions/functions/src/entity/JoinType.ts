import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToOne, Index, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Report } from "./Report";
import { JoinReport } from "./JoinReport";

@Entity()
export class JoinType extends GenericEntity {
    public static LEFT_JOIN_ID: number = 1
    public static INNER_JOIN_ID: number = 2
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string; //leftjoin, rightjoin, innerjoin

    @OneToMany(type => JoinReport, joinReport => joinReport.joinType)
    public joinReports: JoinReport[];
}