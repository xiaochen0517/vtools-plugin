export {StrUtil} from "./StrUtil.js";

export type VToolsUtils = {
  [K in keyof typeof import("./index")]: typeof import("./index")[K];
};
