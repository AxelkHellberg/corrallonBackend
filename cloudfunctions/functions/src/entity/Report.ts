import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToOne, Index, JoinColumn, ManyToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { Profile } from "./Profile";
import { JoinReport } from "./JoinReport";
let encriptutils = require('../components/encryputils')

@Entity()
export class Report extends GenericEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public description: string;

    @Column()
    public from: string;

    @Column({ nullable: true })
    public where: string;

    @Column()
    public entityAlias: string;

    @Column({ nullable: true })
    public select: string;

    @OneToMany(type => JoinReport, joinReport => joinReport.report)
    public joinsReport: JoinReport[];

    @ManyToMany(type => Profile, profile => profile.reportAvailable, { onDelete: 'CASCADE' })
    allowedProfiles: Profile[];
}