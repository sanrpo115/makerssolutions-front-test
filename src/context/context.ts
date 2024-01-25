import React, { createContext } from "react";

const initContext = {
  setListMakers: () => {},
  listMakers: []
}

interface CrudApp {
  setListMakers: React.Dispatch<React.SetStateAction<any[]>>;
  listMakers: Array<any>;
}

export const CrudAppContext = createContext<CrudApp>(initContext);
export const CrudAppProvider = CrudAppContext.Provider;