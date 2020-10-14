import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { Sistema } from "./Sistema";
import { Msg } from "../msg/Msg";
import { ErrorVDF } from "../components/ErrorVDF";
import { Tag } from "./Tag";
import { CampoRonda } from "./CampoRonda";
import { FallaEquipamiento } from "./FallaEquipamiento";
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

    @ManyToOne(type => Sistema, sistema => sistema.equipamientos, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "sistemaId" })
    public sistema: Sistema;

    @Column({ nullable: true })
    tagId: number; //GET

    @ManyToOne(type => Tag, tag => tag.equipamientos, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "tagId" })
    public tag: Tag;

    @OneToMany(type => CampoRonda, campoRonda => campoRonda.equipamiento)
    public camposRonda: CampoRonda[]

    @OneToMany(type => FallaEquipamiento, fallaEquipamiento => fallaEquipamiento.equipamiento)
    public fallasEquipamiento: FallaEquipamiento[]

    @BeforeInsert()
    private validateInsert(): void {
        if (this.nombre == null)
            throw new ErrorVDF(Msg.NAME_MANDATORY, Msg.NAME_MANDATORY, 400)
        if (this.sistemaId == null)
            throw new ErrorVDF(Msg.SISTEMA_MANDATORY, Msg.SISTEMA_MANDATORY, 400)
    }

}

