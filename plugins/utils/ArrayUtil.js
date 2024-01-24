import {warn} from "../logs/Logs.ts";

export class ArrayUtil {

  static isEmpty(arr) {
    if (arr === undefined || arr === null) {
      warn('ArrayUtil: arr is undefined or null');
      return true;
    }
    if (!Array.isArray(arr)) {
      warn('ArrayUtil: arr is not an array');
      return true;
    }
    return arr.length === 0;
  }

  static isNotEmpty(arr) {
    return !this.isEmpty(arr);
  }

  static includes(arr, item) {
    if (this.isEmpty(arr)) {
      return false;
    }
    return arr.includes(item);
  }

}
