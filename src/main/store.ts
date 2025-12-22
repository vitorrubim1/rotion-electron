import StorePkg from "electron-store";
const Store =
  (StorePkg as unknown as { default: typeof StorePkg }).default || StorePkg;

interface StoreProps {
  documents: Record<string, any>;
}

export const store = new Store<StoreProps>({
  defaults: {
    documents: {},
  },
});
