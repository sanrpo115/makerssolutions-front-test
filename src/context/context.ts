import React, { createContext } from "react";

const initContext = {
  setListMakers: () => {},
  setUpdateValues: () => {},
  saveMaker: () => {},
  deleteMaker: () => {},
  updateMaker: () => {},
  listMakers: [],
  updateValues: {}
}

interface CrudApp {
  setListMakers: React.Dispatch<React.SetStateAction<any[]>>;
  setUpdateValues: React.Dispatch<React.SetStateAction<any>>;
  saveMaker: (e:any) => void;
  deleteMaker: (e:any) => void;
  updateMaker: (e:any) => void;
  listMakers: Array<any>;
  updateValues: any;
}

export const CrudAppContext = createContext<CrudApp>(initContext);
export const CrudAppProvider = CrudAppContext.Provider;