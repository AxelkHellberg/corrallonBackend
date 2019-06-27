import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, Index, ManyToOne } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Planta } from "./Planta";
import { Sistema } from "./Sistema";
import { Equipamiento } from "./Equipamiento";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { LecturaTag } from "./LecturaTag";
@Entity()
export class Tag extends GenericEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    obligatorio: boolean = false;

    @OneToMany(type => Equipamiento, equipamiento => equipamiento.tag)
    public equipamientos: Equipamiento[]

    @OneToMany(type => Sistema, sistema => sistema.tag)
    public sistemas: Sistema[]


    @OneToMany(type => LecturaTag, lecturaTag => lecturaTag.tag)
    public lecturasTags: LecturaTag[]

    @BeforeInsert()
    private validateInsert(): void {
        if (this.nombre == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
    }
}
