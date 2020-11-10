"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeCalculator = void 0;
var later = require("later");
class TimeCalculator {
    static availableNow(h) {
        var sched = { schedules: [{ dw: TimeCalculator.splitNumberArray(h.dias) }] };
        let calc = later.schedule(sched);
        let valid = calc.isValid(new Date(Date.now()));
        return valid;
    }
    static nextOcurrences(h) {
        var sched = { schedules: [{ dw: TimeCalculator.splitNumberArray(h.dias) }] };
        let calc = later.schedule(sched);
        let dates = calc.next(10);
        console.log(dates);
        return dates;
    }
    static splitNumberArray(array) {
        let splittedArray = array.split(",");
        let numberArray = new Array();
        splittedArray.map((val) => numberArray.push(Number.parseInt(val)));
        return numberArray;
    }
}
exports.TimeCalculator = TimeCalculator;
//# sourceMappingURL=TimeCalculator.js.map