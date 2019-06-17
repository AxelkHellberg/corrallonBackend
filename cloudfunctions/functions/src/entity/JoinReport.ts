import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToOne, Index, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Report } from "./Report";
import { JoinType } from "./JoinType";

@Entity()
export class JoinReport extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    joinColumn: string;

    @Column()
    joinAlias: string;

    @Column()
    reportId: number;

    @ManyToOne(type => Report, report => report.joinsReport)
    @JoinColumn({ name: "reportId" })
    @Index()
    public report: Report;

    @Column()
    joinTypeId: number;

    @ManyToOne(type => JoinType, joinType => joinType.joinReports)
    @JoinColumn({ name: "joinTypeId" })
    @Index()
    public joinType: JoinType;
}