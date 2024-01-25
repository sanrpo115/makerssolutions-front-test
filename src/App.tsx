import Layout from './layout';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';
import { CrudAppProvider } from './context/context';
import { useCrudApp } from './hooks/useCrudApp';

function App() {

  const context = useCrudApp();

  return (
    <CrudAppProvider value={context}>
      <Layout />
    </CrudAppProvider>
  );
}

export default App;
