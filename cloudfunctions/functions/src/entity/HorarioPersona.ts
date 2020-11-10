import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany, PrimaryColumn } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { PlantillaRonda } from "./PlantillaRonda";
import { User } from "./User";
import { CampoRonda } from "./CampoRonda";
import { Horario } from "./Horario";

@Entity()
export class HorarioPersona extends GenericEntity {

  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  horarioId: number;

  @ManyToOne(type => User, user => user.id)
  @JoinColumn({ name: "userId" })
  public user!: User;

  @ManyToOne(type => Horario, horario => horario.id)
  @JoinColumn({ name: "horarioId" })
  public horario!: Horario;

}