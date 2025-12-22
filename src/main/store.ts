import Store from "electron-store";

interface StoreProps {
  documents: Record<string, any>;
}

export const store = new Store<StoreProps>({
  defaults: {
    documents: {},
  },
});
