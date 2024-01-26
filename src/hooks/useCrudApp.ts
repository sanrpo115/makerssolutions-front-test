import { useEffect, useState } from 'react';
import { helpSendRequest } from '../helpers/helpSendRequest';

export const useCrudApp = () => {

  const [listMakers, setListMakers] = useState([]);
  const [updateValues, setUpdateValues] = useState({});

  useEffect(() => {
    consultListMakers();
  }, []);

  const consultListMakers = async () => {
    const response = await helpSendRequest(
      `${process.env.REACT_APP_URL_BASE}${process.env.REACT_APP_PATH}`, "GET", null
    );
    if (response !== null) {
      console.log(response);
      setListMakers(response);
    }
  }

  const saveMaker = async (values: any) => {
    const response = await helpSendRequest(
      `${process.env.REACT_APP_URL_BASE}${process.env.REACT_APP_PATH}`, "POST", JSON.stringify(values)
    );
    if (response !== null) {
      consultListMakers();
    }
  }

  const deleteMaker = async (id: number) => {
    const response = await helpSendRequest(
      `${process.env.REACT_APP_URL_BASE}${process.env.REACT_APP_PATH}/${id}`, "DELETE", null
    );
    if (response !== null) {
      console.log(response);
      consultListMakers();
    }
  }

  const updateMaker = async (values: any) => {
    console.log("editar", values);
  }

  return {
    listMakers,
    updateValues,
    setListMakers,
    saveMaker,
    deleteMaker,
    updateMaker,
    setUpdateValues
  };
}