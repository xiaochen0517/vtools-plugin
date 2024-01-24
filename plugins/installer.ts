import {StrUtil} from "./utils";
import {DateUtil} from "./utils";

const utils = [
  StrUtil,
  DateUtil,
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
