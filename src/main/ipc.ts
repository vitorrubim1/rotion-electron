import { ipcMain } from "electron";
import { randomUUID } from "node:crypto";
import { IPC_EVENTS } from "@shared/constants/ipc";
import * as DTO from "@shared/types/ipc";
import { store } from "./store";

ipcMain.handle(
  IPC_EVENTS.DOCUMENTS.FETCH_ALL,
  async (): Promise<DTO.FetchAllDocumentsResponse> => {
    const documents = store.get("documents");

    return {
      data: Object.values(documents),
    };
  }
);

ipcMain.handle(
  IPC_EVENTS.DOCUMENTS.FETCH,
  async (
    _,
    { id }: DTO.FetchDocumentRequest
  ): Promise<DTO.FetchDocumentResponse> => {
    const document = store.get(`documents.${id}`);

    return {
      data: document,
    };
  }
);

ipcMain.handle(
  IPC_EVENTS.DOCUMENTS.CREATE,
  async (): Promise<DTO.CreateDocumentResponse> => {
    const id = randomUUID();
    const document: DTO.Document = { id, title: "Untitled" };

    store.set(`documents.${id}`, document);

    return { data: document };
  }
);

ipcMain.handle(
  IPC_EVENTS.DOCUMENTS.SAVE,
  async (_, document: DTO.SaveDocumentRequest): Promise<void> => {
    return store.set(`documents.${document.id}`, document);
  }
);

ipcMain.handle(
  IPC_EVENTS.DOCUMENTS.DELETE,
  async (_, { id }: DTO.DeleteDocumentRequest): Promise<void> => {
    return store.delete(`documents.${id}`);
  }
);
