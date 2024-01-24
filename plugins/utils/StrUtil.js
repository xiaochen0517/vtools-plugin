import { warn } from '../logs/Logs.ts';

export class StrUtil {

  static isEmpty(str) {
    if (str === undefined || str === null) {
      warn('StrUtil: str is undefined or null');
      return true;
    }
    if (typeof str !== 'string') {
      warn('StrUtil: str is not a string');
      return true;
    }
    return str.length === 0;
  }

  static isNotEmpty(str) {
    return !this.isEmpty(str);
  }

}
