import React from 'react';
import NavBarComponent from './components/NavbarComponent';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContainer from './containers/CartContainer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ComerceProvider from './context/ShopContext';
import CartProvider from './context/CartContext';
import FooterComponent from './components/FooterComponent';

function App(){

  //Todo: 1- cambiar layout de carrito.
  //2- pagina de error cuando se vaya a item/Id incorrecto
  //3- e-mail se valida 2 veces

  //me interesan 2 feedback:

  //tengo muchos estados o deberia apuntar a mantener esta cantidad (pregunto porque pienso que puedo tener mas pero igual ahora funciona todo
  //como puedo mejorar rendimiento? es malo que renderice mas de 2 veces la pagina con cada accion que se realice?

  return (
    <ComerceProvider>

      <CartProvider>

        <BrowserRouter>

        <NavBarComponent/>
          
          <Switch>

            <Route exact path={'/'}>

              <ItemListContainer/>

            </Route>

            <Route path={'/Categoria/:category'}>

              <ItemListContainer/>

            </Route>

            <Route path={'/Detalles/:id'}>

              <ItemDetailContainer/>

            </Route> 

            <Route path={'/Cart'}>

              <CartContainer/>

            </Route> 

          </Switch>

          <FooterComponent/>

        </BrowserRouter>

      </CartProvider>

    </ComerceProvider>
    
  );
}

export default App;