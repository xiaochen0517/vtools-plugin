import {StrUtil} from "./utils";

const utils = [
  StrUtil,
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
