export {StrUtil} from "./StrUtil";
export {DateUtil} from "./DateUtil";
export {ArrayUtil} from "./ArrayUtil";
export type {DateRange, YearAndWeek} from "./DateUtil";

export type VToolsUtils = {
  [K in keyof typeof import("./index")]: typeof import("./index")[K];
};
