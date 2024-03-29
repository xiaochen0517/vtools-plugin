import {Installer as VTools} from "./installer.ts";
import {VToolsUtils} from "./utils";

export {StrUtil} from "./utils";
export default VTools;


declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    vtools: VToolsUtils;
  }
}
