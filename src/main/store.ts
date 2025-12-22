import StorePkg from "electron-store";

import { type Document } from "@shared/types/ipc";

const Store =
  (StorePkg as unknown as { default: typeof StorePkg }).default || StorePkg;

interface StoreProps {
  documents: Record<string, Document>;
}

export const store = new Store<StoreProps>({
  defaults: {
    documents: {},
  },
});
