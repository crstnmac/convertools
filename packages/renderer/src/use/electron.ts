import type { ElectronApi } from "@vue/runtime-core";

export function useElectron(): ElectronApi {
  return window.electron;
}
