import { contextBridge, ipcRenderer } from "electron";
import { IPC_EVENTS } from "@shared/constants/ipc";
import * as DTO from "@shared/types/ipc";

declare global {
  export interface Window {
    api: typeof api;
  }
}

// Custom APIs for renderer
const api = {
  fetchDocuments(): Promise<DTO.FetchAllDocumentsResponse> {
    return ipcRenderer.invoke(IPC_EVENTS.DOCUMENTS.FETCH_ALL);
  },

  fetchDocument(
    request: DTO.FetchDocumentRequest
  ): Promise<DTO.FetchDocumentResponse> {
    return ipcRenderer.invoke(IPC_EVENTS.DOCUMENTS.FETCH, request);
  },

  createDocument(): Promise<DTO.CreateDocumentResponse> {
    return ipcRenderer.invoke(IPC_EVENTS.DOCUMENTS.CREATE);
  },

  saveDocument(request: DTO.SaveDocumentRequest): Promise<void> {
    return ipcRenderer.invoke(IPC_EVENTS.DOCUMENTS.SAVE, request);
  },

  deleteDocument(request: DTO.DeleteDocumentRequest): Promise<void> {
    return ipcRenderer.invoke(IPC_EVENTS.DOCUMENTS.DELETE, request);
  },

  onNewDocumentRequested(callback: () => void) {
    ipcRenderer.on(IPC_EVENTS.SHORTCUTS.NEW_DOCUMENT, callback);

    return () => {
      ipcRenderer.off(IPC_EVENTS.SHORTCUTS.NEW_DOCUMENT, callback);
    };
  },
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  // @ts-ignore (define in dts)
  window.api = api;
}
