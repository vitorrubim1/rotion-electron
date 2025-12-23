import { app, BrowserWindow, globalShortcut } from "electron";
import { IPC_EVENTS } from "../shared/constants/ipc";

export function createShortcuts(window: BrowserWindow) {
  app.on("browser-window-focus", () => {
    globalShortcut.register("CommandOrControl+N", () => {
      window.webContents.send(IPC_EVENTS.SHORTCUTS.NEW_DOCUMENT);
    });
  });

  app.on("browser-window-blur", () => {
    globalShortcut.unregisterAll();
  });
}
