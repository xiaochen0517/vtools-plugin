import {FullInstaller as VTools} from "./FullInstaller";
import {StrUtil} from "./utils/StrUtil.ts";

export {StrUtil};

export default VTools;

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $StrUtil: typeof StrUtil
  }
}
