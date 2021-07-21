import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { ShopContext } from "../../context/ShopContext";
import { ItemList } from "../../components/ItemList";

export const ItemListContainer = ()  => {
    // fetch a la base de datos o ajax

    
    const CONTEXT = useContext(ShopContext);
    console.log(CONTEXT)

    return (
        <div>
            <section>
                <Link to="/detalle">Ver producto</Link>
                <br/>
                <br/>
                <ItemList/>
            </section>
           
        </div>
    )
}


    

