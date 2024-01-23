import {StrUtilInstaller} from "./installers/StrUtilInstaller";

export const FullInstaller = {
  install(app: any) {
    app.use(StrUtilInstaller);
  },
}
