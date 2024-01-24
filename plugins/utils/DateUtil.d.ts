export type DateRange = {
  start: Date;
  end: Date;
};

export type YearAndWeek = {
  year: number;
  week: number;
};

export class DateUtil {

  static fmtDate(date: Date, fmt: string): string;

  static fmtDateNow(fmt: string): string;

  static fmtSimpleDate(date: Date): string;

  static fmtSimpleDateNow(): string;

  static dateRangeByYearAndWeek(year: number, week: number): DateRange;

  static yearAndWeekOfDate(date: Date): YearAndWeek;

  static yearAndWeekOfDateNow(): YearAndWeek;

  static yearAndPastWeekOfNow(): YearAndWeek;
}
