import { useEffect, useState } from 'react';
import { helpSendRequest } from '../helpers/helpSendRequest';
import { ListFormat } from 'typescript';

export const useCrudApp = () => {

  const [listMakers, setListMakers] = useState([]);

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
  

  return {
    listMakers,
    setListMakers
  };
}