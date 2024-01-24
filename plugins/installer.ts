import {ArrayUtil, DateUtil, StrUtil} from "./utils";

const utils = [
  StrUtil,
  DateUtil,
  ArrayUtil,
];

export const Installer = {
  install(app: any) {
    app.config.globalProperties.vtools = {};
    utils.forEach((util) => {
      console.log(util.name);
      app.config.globalProperties.vtools[util.name] = util;
    });
  },
};
