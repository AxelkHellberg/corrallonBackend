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

    @Column({ nullable: true })
    joinWhere: string = null;

    @Column()
    reportId: number;

    @ManyToOne(type => Report, report => report.joinsReport, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "reportId" })
    @Index()
    public report: Report;

    @Column()
    joinTypeId: number;

    @ManyToOne(type => JoinType, joinType => joinType.joinReports, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "joinTypeId" })
    @Index()
    public joinType: JoinType;
}