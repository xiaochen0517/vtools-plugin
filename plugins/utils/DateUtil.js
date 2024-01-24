import dayjs from "dayjs";
import {StrUtil} from "./StrUtil.js";
import {warn} from "../logs/Logs.ts";
import weekOfYear from "dayjs/plugin/weekOfYear";

export class DateUtil {

  static fmtDate(date, fmt) {
    if (date === undefined || date === null) {
      throw new Error('DateUtil: date is undefined or null');
    }
    if (StrUtil.isBlank(fmt)) {
      warn("DateUtil: fmt is blank");
      fmt = 'YYYY-MM-DD HH:mm:ss';
    }
    return dayjs(date).format(fmt);
  }

  static fmtDateNow(fmt) {
    return this.fmtDate(new Date(), fmt);
  }

  static fmtSimpleDateNow() {
    return this.fmtDateNow('YYYY-MM-DD HH:mm:ss');
  }

  static dateRangeByYearAndWeek(year, weekNum) {
    dayjs.extend(weekOfYear);
    const start = dayjs().year(year).week(weekNum).startOf('week');
    const end = dayjs().year(year).week(weekNum).endOf('week');
    return {
      start: start.toDate(),
      end: end.toDate()
    };
  }
}
