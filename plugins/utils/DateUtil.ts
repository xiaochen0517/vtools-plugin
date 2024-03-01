import dayjs from "dayjs";
import StrUtil from "./StrUtil.ts";
import {warn} from "../logs/Logs.ts";
import weekOfYear from "dayjs/plugin/weekOfYear";

export type DateRange = {
  start: Date;
  end: Date;
};

export type YearAndWeek = {
  year: number;
  week: number;
};

export const fmtDate = (date: Date, fmt: string): string => {
  if (date === undefined || date === null) {
    throw new Error("DateUtil: date is undefined or null");
  }
  if (StrUtil.isBlank(fmt)) {
    warn("DateUtil: fmt is blank");
    fmt = "YYYY-MM-DD HH:mm:ss";
  }
  return dayjs(date).format(fmt);
};


export const fmtDateNow = (fmt: string): string => {
  return fmtDate(new Date(), fmt);
};

export const fmtSimpleDate = (date: Date): string => {
  return fmtDate(date, "YYYY-MM-DD");
};

export const fmtSimpleDateNow = (): string => {
  return fmtSimpleDate(new Date());
};

export const dateRangeByYearAndWeek = (year: number, weekNum: number): DateRange => {
  dayjs.extend(weekOfYear);
  const start = dayjs().year(year).week(weekNum).startOf("week");
  const end = dayjs().year(year).week(weekNum).endOf("week");
  return {
    start: start.toDate(),
    end: end.toDate(),
  };
};

export const yearAndWeekOfDate = (date: Date): YearAndWeek => {
  dayjs.extend(weekOfYear);
  const year = dayjs(date).year();
  const week = dayjs(date).week();
  return {
    year: year,
    week: week,
  };
};

export const yearAndWeekOfDateNow = (): YearAndWeek => {
  return yearAndWeekOfDate(new Date());
};

export const yearAndPastWeekOfNow = (): YearAndWeek => {
  let yearAndWeek = yearAndWeekOfDateNow();
  yearAndWeek.week = yearAndWeek.week - 1;
  return yearAndWeek;
};

export default {
  fmtDate,
  fmtDateNow,
  fmtSimpleDate,
  fmtSimpleDateNow,
  dateRangeByYearAndWeek,
  yearAndWeekOfDate,
  yearAndWeekOfDateNow,
  yearAndPastWeekOfNow,
};
