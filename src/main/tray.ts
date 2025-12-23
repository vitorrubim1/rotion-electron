import { app, BrowserWindow, Menu, nativeImage, Tray } from "electron";
import path from "node:path";

app.whenReady().then(() => {
  const tray = new Tray(path.resolve("resources/rotionTemplate.png"));

  const menu = Menu.buildFromTemplate([
    { label: "Rotion", enabled: false },
    { label: "Sair", click: () => app.quit() },
    { type: "separator" },
    {
      label: "Abrir",
      click: () => {
        const mainWindow = BrowserWindow.getAllWindows()[0];
        mainWindow.show();
      },
    },
    { type: "checkbox", label: "Ativar darkmode" },
  ]);

  tray.setContextMenu(menu);
});
