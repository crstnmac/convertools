import { BrowserWindow, ipcMain } from "electron";
import { join } from "path";
import { URL } from "url";

async function createWindow() {
  const browserWindow = new BrowserWindow({
    show: false, // Use 'ready-to-show' event to show window
    frame: false,
    center: true,
    resizable: false,
    height: 648,
    width: 1083,
    webPreferences: {
      nativeWindowOpen: true,
      webviewTag: false, // The webview tag is not recommended. Consider alternatives like iframe or Electron's BrowserView. https://www.electronjs.org/docs/latest/api/webview-tag#warning
      preload: join(__dirname, "../../preload/dist/index.cjs"),
    },
  });

  /**
   * If you install `show: true` then it can cause issues when trying to close the window.
   * Use `show: false` and listener events `ready-to-show` to fix these issues.
   *
   * @see https://github.com/electron/electron/issues/25012
   */
  browserWindow.on("ready-to-show", () => {
    browserWindow?.show();

    if (import.meta.env.DEV) {
      browserWindow?.webContents.openDevTools({ mode: "detach" });
    }
  });

  ipcMain.on("close", () => browserWindow?.close());

  ipcMain.on("toggle-maximize", () => {
    const win = browserWindow;
    if (win?.isMaximized()) win?.unmaximize();
    else win?.maximize();
  });

  ipcMain.on("minimize", () => browserWindow?.minimize());

  ipcMain.on("is-minimizable", () => browserWindow?.isMaximizable());

  ipcMain.on("is-maximizable", () => browserWindow?.isMaximizable());

  ipcMain.on("is-closable", () => browserWindow?.isClosable());

  // ipcMain.on("open-devtools", () => {
  //   browserWindow?.webContents.openDevTools();
  // });

  /**
   * URL for main window.
   * Vite dev server for development.
   * `file://../renderer/index.html` for production and test
   */
  const pageUrl =
    import.meta.env.DEV && import.meta.env.VITE_DEV_SERVER_URL !== undefined
      ? import.meta.env.VITE_DEV_SERVER_URL
      : new URL(
          "../renderer/dist/index.html",
          "file://" + __dirname
        ).toString();

  await browserWindow.loadURL(pageUrl);

  return browserWindow;
}

/**
 * Restore existing BrowserWindow or Create new BrowserWindow
 */
export async function restoreOrCreateWindow() {
  let window = BrowserWindow.getAllWindows().find((w) => !w.isDestroyed());

  if (window === undefined) {
    window = await createWindow();
  }

  if (window.isMinimized()) {
    window.restore();
  }

  window.focus();
}
