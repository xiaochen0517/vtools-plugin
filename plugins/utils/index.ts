export {StrUtil} from "./StrUtil.js";
export {DateUtil} from "./DateUtil.js";
export type {DateRange, YearAndWeek} from "./DateUtil.js";

export type VToolsUtils = {
  [K in keyof typeof import("./index")]: typeof import("./index")[K];
};
