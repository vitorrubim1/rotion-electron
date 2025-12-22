import { contextBridge, ipcRenderer } from "electron";
import { ElectronAPI, electronAPI } from "@electron-toolkit/preload";
import { IPC_EVENTS } from "@shared/constants/ipc";
import { type FetchAllDocumentsResponse } from "@shared/types/ipc";

declare global {
  export interface Window {
    electron: ElectronAPI;
    api: typeof api;
  }
}

// Custom APIs for renderer
const api = {
  fetchDocument(): Promise<FetchAllDocumentsResponse> {
    return ipcRenderer.invoke(IPC_EVENTS.DOCUMENTS.FETCH_ALL);
  },
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI;
  // @ts-ignore (define in dts)
  window.api = api;
}
