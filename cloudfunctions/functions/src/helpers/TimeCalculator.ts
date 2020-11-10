import { Horario } from "../entity/Horario";
var later = require("later");

export class TimeCalculator {
  static availableNow(h: Horario) {
    var sched = { schedules: [{ dw: TimeCalculator.splitNumberArray(h.dias) }] };
    let calc = later.schedule(sched);
    let valid = calc.isValid(new Date(Date.now()));
    return valid;
  }

  static nextOcurrences(h: Horario): Date[] {
    var sched = { schedules: [{ dw: TimeCalculator.splitNumberArray(h.dias) }] };
    let calc = later.schedule(sched);
    let dates = calc.next(10);
    console.log(dates);
    return dates;
  }
  
  public static splitNumberArray(array: string): Number[]{
    let splittedArray = array.split(",")
    let numberArray = new Array<Number>();
    splittedArray.map((val) => numberArray.push(Number.parseInt(val)));
    return numberArray;
  }

}