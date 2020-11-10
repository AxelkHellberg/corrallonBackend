import { date } from "later";

export class PlantillaRondaDates {
  idPlantilla: number;
  dates: Date[];

  constructor(idPlantilla: number, dates: Date[]) {
    this.idPlantilla = idPlantilla;
    this.dates = dates;
  }
}