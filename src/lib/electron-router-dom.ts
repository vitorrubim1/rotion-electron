import { createElectronRouter } from "electron-router-dom";

export const { Router, registerRoute } = createElectronRouter({
  port: 5173, // porta do servidor Vite (padrão: 5173)

  types: {
    /**
     * Os ids das janelas da sua aplicação, pense nesses ids como os basenames das rotas
     * essa nova forma permitirá que o intelisense do seu editor te ajude a saber quais ids estão disponíveis
     * tanto no main quanto no renderer process
     */
    ids: ["main"],
  },
});
