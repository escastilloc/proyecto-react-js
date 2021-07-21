import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemListContainer} from './containers/ItemListContainer';
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import { ShopContext, ShopProvider } from './context/ShopContext';
import { useEffect, useState } from 'react';
import { NavbarComponent } from './components/NavbarComponent';

function App() {

  const cart = [];
 
  return (
    <div>
      <ShopProvider>
        <BrowserRouter>
          <NavbarComponent cart={cart}/>
        <Switch>
          <Route exact path={'/'}>
              <ItemListContainer/>
          </Route>
          <Route path="/detalle">
              <ItemDetailContainer/>
          </Route>
        </Switch>
        </BrowserRouter>
      </ShopProvider>
    </div>
  );
}

export default App;
