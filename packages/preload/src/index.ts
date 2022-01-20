/**
 * @module preload
 */

import { contextBridge, ipcRenderer } from "electron";
import { sha256sum } from "/@/sha256sum";

/**
 * The "Main World" is the JavaScript context that your main renderer code runs in.
 * By default, the page you load in your renderer executes code in this world.
 *
 * @see https://www.electronjs.org/docs/api/context-bridge
 */

/**
 * After analyzing the `exposeInMainWorld` calls,
 * `packages/preload/exposedInMainWorld.d.ts` file will be generated.
 * It contains all interfaces.
 * `packages/preload/exposedInMainWorld.d.ts` file is required for TS is `renderer`
 *
 * @see https://github.com/cawa-93/dts-for-context-bridge
 */

/**
 * Expose Environment versions.
 * @example
 * console.log( window.versions )
 */
contextBridge.exposeInMainWorld("versions", process.versions);

/**
 * Safe expose node.js API
 * @example
 * window.nodeCrypto('data')
 */
contextBridge.exposeInMainWorld("nodeCrypto", { sha256sum });

const apiKey = "electron";

const api = {
  versions: process.versions,
  maximize: () => {
    ipcRenderer.send("toggle-maximize");
  },
  minimize: () => {
    ipcRenderer.send("minimize");
  },
  close: () => {
    ipcRenderer.send("close");
  },
  isMinimizable: () => {
    return ipcRenderer.sendSync("is-minimizable");
  },
  isMaximizable: () => {
    return ipcRenderer.sendSync("is-maximizable");
  },
  isClosable: () => {
    return ipcRenderer.sendSync("is-closable");
  },
  devtools: () => {
    ipcRenderer.send("open-devtools");
  },
};

contextBridge.exposeInMainWorld(apiKey, api);
