export type DateRange = {
  start: Date;
  end: Date;
};

export class DateUtil {

  static fmtDate(date: Date, fmt: string): string;

  static fmtDateNow(fmt: string): string;

  static fmtSimpleDateNow(): string;

  static dateRangeByYearAndWeek(year: number, week: number): DateRange;
}
