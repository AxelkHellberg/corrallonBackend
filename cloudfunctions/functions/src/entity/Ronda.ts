import { Entity, PrimaryGeneratedColumn, Column, OneToMany, AfterLoad, BeforeUpdate, BeforeInsert, ManyToOne, Index, JoinColumn, ManyToMany, Timestamp } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { ErrorVDF } from "../components/ErrorVDF";
import { Msg } from "../msg/msg";
import { Profile } from "./Profile";
import { JoinReport } from "./JoinReport";
import { User } from "./User";
import { EstadoRonda } from "./EstadoRonda";
import { PlantillaRonda } from "./PlantillaRonda";
import { ValorCampoRonda } from "./ValorCampoRonda";
import { LecturaTag } from "./LecturaTag";
let encriptutils = require('../components/encryputils')

@Entity()
export class Ronda extends GenericEntity {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: "float", precision: 5, scale: 2 })
    public porcentaje: number;

    @Column({ nullable: true })
    public tiempoRondaMinutos: number;


    @Column()
    public nombre: string;

    @Column()
    public userId: number;

    @ManyToOne(type => User, user => user.rondas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "userId" })
    public user: User;

    @Column()
    public estadoRondaId: number;

    @ManyToOne(type => EstadoRonda, estadoRonda => estadoRonda.rondas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "estadoRondaId" })
    public estadoRonda: EstadoRonda;

    @OneToMany(type => ValorCampoRonda, valorCampoRonda => valorCampoRonda.ronda)
    public ronda: Ronda[]

    @OneToMany(type => LecturaTag, lecturaTag => lecturaTag.ronda)
    public lecturasTags: LecturaTag[]

    @Column()
    public plantillaRondaId: number;

    @ManyToOne(type => PlantillaRonda, plantillaRonda => plantillaRonda.rondas, { onDelete: 'CASCADE' })
    @JoinColumn({ name: "plantillaRondaId" })
    public plantillaRonda: PlantillaRonda;

    @OneToMany(type => ValorCampoRonda, valorCampoRonda => valorCampoRonda.ronda)
    public valoresCamposRonda: ValorCampoRonda[];
}