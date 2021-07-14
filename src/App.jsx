import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemListContainer} from './containers/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
            <ItemListContainer/>
        </Route>
        <Route path={'/detalle/:nombreProducto'}>
            <ItemDetailContainer/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
