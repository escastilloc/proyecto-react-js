import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({children}) => {

    const [listProducts, setListProducts] = useState([]);
    useEffect(() => {
      async function getData() {
       const response = await fetch(`https://api.mercadolibre.com/sites/MLC/search?q=tecnologia`); 
       const data = await response.json();
       setListProducts(data.results);
      }
      getData();
    },[]);

    return <ShopContext.Provider value={listProducts}>
        {children}
    </ShopContext.Provider>
}

