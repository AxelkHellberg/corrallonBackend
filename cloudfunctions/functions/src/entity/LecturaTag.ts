import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToMany, JoinTable, Index, ManyToOne, JoinColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { User } from "./User";
import { PermissionWS } from "./PermissionWS";
import { Report } from "./Report";
import { Planta } from "./Planta";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { Equipamiento } from "./Equipamiento";
import { Tag } from "./Tag";
import { CampoManiobra } from "./CampoManiobra";
import { Ronda } from "./Ronda";
@Entity()
export class LecturaTag extends GenericEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tagId: number; //GET

    @ManyToOne(type => Tag, tag => tag.lecturasTags, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "tagId" })
    public tag: Tag;

    @Column()
    rondaId: number; //GET

    @ManyToOne(type => Ronda, ronda => ronda.lecturasTags, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "rondaId" })
    public ronda: Ronda;

    @BeforeInsert()
    private validateInsert(): void {
        if (this.tagId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("tagId"), Msg.CAMPO_OBLIGATORIO("tagId"), 400)
        if (this.rondaId == null)
            throw new ErrorVDF(Msg.CAMPO_OBLIGATORIO("rondaId"), Msg.CAMPO_OBLIGATORIO("rondaId"), 400)
    }
}


