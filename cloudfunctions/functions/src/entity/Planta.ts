import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { User } from "./User";
import { PermissionWS } from "./PermissionWS";
import { Report } from "./Report";
import { Sistema } from "./Sistema";
import { Msg } from "../msg/Msg";
import { ErrorVDF } from "../components/ErrorVDF";
@Entity()
export class Planta extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @OneToMany(type => Sistema, sistema => sistema.planta)
    public sistemas: Sistema[]

    @BeforeInsert()
    private validateInsert(): void {
        if (this.nombre == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
    }

}


