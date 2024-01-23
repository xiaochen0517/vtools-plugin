import {StrUtil} from "../utils/StrUtil";

export const StrUtilInstaller = {
  install(app: any) {
    console.log("StrUtilInstaller installed");
    app.config.globalProperties.$StrUtil = StrUtil;
  },
};
