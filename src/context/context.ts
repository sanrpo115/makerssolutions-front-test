import React, { createContext } from "react";

const initContext = {
  setListMakers: () => {},
  setUpdateValues: () => {},
  saveMaker: () => {},
  deleteMaker: () => {},
  updateMaker: () => {},
  setModalOpen: () => {},
  setModalMessage: () => {},
  onClose: () => {},
  listMakers: [],
  updateValues: {},
  modalOpen: false,
  modalMessage: ""
}

interface CrudApp {
  setListMakers: React.Dispatch<React.SetStateAction<any[]>>;
  setUpdateValues: React.Dispatch<React.SetStateAction<any>>;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setModalMessage: React.Dispatch<React.SetStateAction<String>>;
  saveMaker: (e:any) => void;
  deleteMaker: (e:any) => void;
  updateMaker: (e:any) => void;
  onClose: () => void;
  listMakers: Array<any>;
  updateValues: any;
  modalOpen: boolean;
  modalMessage: string;
}

export const CrudAppContext = createContext<CrudApp>(initContext);
export const CrudAppProvider = CrudAppContext.Provider;