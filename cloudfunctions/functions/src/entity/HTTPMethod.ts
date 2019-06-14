import {Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne} from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Profile } from "./Profile";
import { PermissionWS } from "./PermissionWS";
let encriptutils=require('../components/encryputils')
@Entity()
export class HTTPMethod extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(type=>PermissionWS, permmissionsWS=>permmissionsWS.httpMethod)
    public permmissionsWS:PermissionWS[]
}
