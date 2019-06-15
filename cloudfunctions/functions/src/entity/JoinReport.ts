import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToOne, Index, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Report } from "./Report";

@Entity()
export class JoinReport extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    join: string;

    @Column()
    reportId: number; //GET

    @ManyToOne(type => Report, report => report.joinsReport)
    @JoinColumn({ name: "reportId" })
    public report: Report;
}