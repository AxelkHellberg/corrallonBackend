import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Sistema } from "./Sistema";
import { Msg } from "../msg/msg";
import { ErrorVDF } from "../components/ErrorVDF";
import { Tag } from "./Tag";
@Entity()
export class Equipamiento extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    detalle: string;

    @Column()
    sistemaId: number; //GET

    @ManyToOne(type => Sistema, sistema => sistema.equipamientos)
    @JoinColumn({ name: "sistemaId" })
    public sistema: Sistema;

    @Column({ nullable: true })
    tagId: number; //GET

    @ManyToOne(type => Tag, tag => tag.equipamientos)
    @JoinColumn({ name: "tagId" })
    public tag: Tag;

    @BeforeInsert()
    private validateInsert(): void {
        if (this.nombre == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
        if (this.sistemaId == null)
            throw new ErrorVDF(Msg.SISTEMA_MANDATORY, Msg.SISTEMA_MANDATORY, 400)
    }

}


