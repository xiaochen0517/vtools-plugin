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

  static isBlank(str) {
    if (this.isEmpty(str)) {
      return true;
    }
    return str.trim().length === 0;
  }

  static isNotBlank(str) {
    return !this.isBlank(str);
  }

  static isNumeric(str) {
    if (this.isBlank(str)) {
      return false;
    }
    return !isNaN(str) && !isNaN(parseFloat(str));
  }

  static isNotNumeric(str) {
    return !this.isNumeric(str);
  }
}
