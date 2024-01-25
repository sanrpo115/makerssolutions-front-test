import { useContext, useEffect } from 'react';
import { CrudAppContext } from '../context/context';
import Create from '../components/create';
import Results from '../components/results';

const Layout = () => {

	// const {  } = useContext(CrudAppContext);

  return (
    <div className="container">
      <Create />
      <Results />
    </div>
  )

}

export default Layout;