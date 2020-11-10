import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { GenericEntity } from "./GenericEntity";
import { PlantillaRonda } from "./PlantillaRonda";
import { User } from "./User";
import { HorarioPersona } from "./HorarioPersona";
import { CampoRondaPlantillaRonda } from "./CampoRondaPlantillaRonda";

@Entity()
export class Horario extends GenericEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dias: string;

  @Column()
  tipoRecurrencia: number;

  @Column()
  horaInicio: string;

  @Column()
  horaFin: string;

  @Column()
  fechaInicio: Date;

  @Column()
  fechaFin: Date;

  @Column()
  plantillaId: number;
  
  @ManyToOne(type => PlantillaRonda, plantillaRonda => plantillaRonda.horariosRecurrentes)
  @JoinColumn({ name: "plantillaId" })
  public plantilla: PlantillaRonda;

  @OneToMany(type => HorarioPersona, horarioPersona => horarioPersona.horario)
  public horarioPersona: HorarioPersona[]

}