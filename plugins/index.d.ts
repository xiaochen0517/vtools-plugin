import {VToolsUtils} from "./utils";
import {ComponentCustomProperties} from "@vue/runtime-core";

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    vtools: VToolsUtils;
  }
}
