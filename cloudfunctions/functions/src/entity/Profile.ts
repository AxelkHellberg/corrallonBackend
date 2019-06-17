import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { User } from "./User";
import { PermissionWS } from "./PermissionWS";
import { Report } from "./Report";
let encriptutils = require('../components/encryputils')
@Entity()
export class Profile extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToMany(type => PermissionWS, permissionsws => permissionsws.profiles)
    @JoinTable()
    permissionsWS: PermissionWS[];

    @ManyToMany(type => Report, report => report.allowedProfiles)
    @JoinTable({ name: "permissionReport" })
    reportAvailable: Report[];

    @OneToMany(type => User, user => user.profile)
    public users: User[]

}


