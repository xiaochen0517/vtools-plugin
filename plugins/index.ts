import {Installer as VTools} from "./installer.ts";
import {VToolsUtils} from "./utils";

export {StrUtil, DateUtil, ArrayUtil} from "./utils";
export type {DateRange, YearAndWeek} from "./utils";
export default VTools;


declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    vtools: VToolsUtils;
  }
}
