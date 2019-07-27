import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Profile } from "./Profile";
import { HTTPMethod } from "./HTTPMethod";
let encriptutils = require('../components/encryputils')
@Entity()
export class PermissionWS extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    servicePath: string; // /entities/users

    @Column()
    description: string;

    @Column()
    httpMethodId: number; //GET

    @ManyToOne(type => HTTPMethod, httpMethod => httpMethod.permmissionsWS, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "httpMethodId" })
    public httpMethod: HTTPMethod;

    @ManyToMany(type => Profile, profiles => profiles.permissionsWS)
    public profiles: Profile[];
}
