import { ipcMain } from "electron";

ipcMain.handle("fetch-documents", async () => {
  return [
    { id: "1", title: "Document 1", content: "Content 1" },
    { id: "2", title: "Document 2", content: "Content 2" },
    { id: "3", title: "Document 3", content: "Content 3" },
    { id: "4", title: "Document 4", content: "Content 4" },
  ];
});
