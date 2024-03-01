import {warn} from "../logs/Logs.ts";

export const isEmpty = (str: string): boolean => {
  if (str === undefined || str === null) {
    warn("StrUtil: str is undefined or null");
    return true;
  }
  return str.length === 0;
};

export const isNotEmpty = (str: string): boolean => {
  return !isEmpty(str);
};

export const isBlank = (str: string): boolean => {
  if (isEmpty(str)) {
    return true;
  }
  return str.trim().length === 0;
};

export const isNotBlank = (str: string): boolean => {
  return !isBlank(str);
};

export const isNumeric = (str: string): boolean => {
  if (isBlank(str)) {
    return false;
  }
  return !isNaN(parseFloat(str));
};

export const isNotNumeric = (str: string): boolean => {
  return !isNumeric(str);
};

export default {
  isEmpty,
  isNotEmpty,
  isBlank,
  isNotBlank,
  isNumeric,
  isNotNumeric,
};
