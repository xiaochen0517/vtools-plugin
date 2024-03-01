import {warn} from "../logs/Logs.ts";

export const isEmpty = <T>(arr: T[]): boolean => {
  if (arr === undefined || arr === null) {
    warn("ArrayUtil: arr is undefined or null");
    return true;
  }
  if (!Array.isArray(arr)) {
    warn("ArrayUtil: arr is not an array");
    return true;
  }
  return arr.length === 0;
};

export const isNotEmpty = <T>(arr: T[]) => {
  return !isEmpty(arr);
};

export const includes = <T>(arr: T[], item: T) => {
  if (isEmpty(arr)) {
    return false;
  }
  return arr.includes(item);
};

export default {
  isEmpty,
  isNotEmpty,
  includes,
};
