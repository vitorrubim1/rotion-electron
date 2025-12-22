import { app, shell, BrowserWindow, ipcMain } from "electron";
import path, { join } from "node:path";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";
import { registerRoute } from "../lib/electron-router-dom";

import "./ipc";
import "./store";

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 1120,
    height: 700,
    frame: process.platform === "linux" ? false : true,
    show: false,
    autoHideMenuBar: true,
    title: "Rotion",
    backgroundColor: "#17141f",
    titleBarStyle: "hiddenInset",
    ...(process.platform === "linux"
      ? { icon: path.join(__dirname, "../../build/icon.png") }
      : {}),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false,
    },
  });

  mainWindow.on("ready-to-show", () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  registerRoute({
    id: "main",
    browserWindow: mainWindow,
    htmlFile: path.join(__dirname, "../renderer/index.html"),
  });
}

if (process.platform === "darwin") {
  if (app.dock) {
    app.dock.setIcon(path.resolve(__dirname, "icon.png"));
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId("com.electron");

  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  ipcMain.on("ping", () => console.log("pong"));

  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
