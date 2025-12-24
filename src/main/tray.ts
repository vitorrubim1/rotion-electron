import { BrowserWindow, Menu, Tray } from "electron";
import path from "node:path";
import { IPC_EVENTS } from "../shared/constants/ipc";

export function createTray(window: BrowserWindow) {
  const tray = new Tray(
    path.join(__dirname, "..", "..", "resources", "rotionTemplate.png")
  );

  const menu = Menu.buildFromTemplate([
    { label: "Rotion", enabled: false },
    { type: "separator" },
    {
      label: "Novo documento",
      click: () => {
        window.webContents.send(IPC_EVENTS.SHORTCUTS.NEW_DOCUMENT);
      },
    },
    { type: "separator" },
    { label: "Documentos recentes", enabled: false },
    { label: "Ignite", accelerator: "CommandOrControl+1" },
    { type: "separator" },
    { label: "Sair", role: "quit" },
  ]);

  tray.setContextMenu(menu);
}
