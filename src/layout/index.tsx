import { useContext, useEffect } from 'react';
import { CrudAppContext } from '../context/context';
import Create from '../components/create';
import Results from '../components/results';
import ModalMessage from '../components/modal-message';

const Layout = () => {

	const { modalOpen, modalMessage, onClose } = useContext(CrudAppContext);

  return (
    <div className="container">
      <Create />
      <Results />
      <ModalMessage isOpen={modalOpen} message={modalMessage} onClose={onClose} />
    </div>
  )

}

export default Layout;