export class StrUtil {

  public static isEmpty(str: undefined | null | string): boolean {
    if (str === undefined || str === null) {
      return true;
    }
    return str.length === 0;
  }

  public static isNotEmpty(str: undefined | null | string): boolean {
    return !this.isEmpty(str);
  }

}
