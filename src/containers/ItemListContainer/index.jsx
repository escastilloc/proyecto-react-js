import { useState } from "react";
import { NavbarComponent } from "../../components/NavbarComponent"
import { Link } from 'react-router-dom';
import { useEffect } from "react";
export const ItemListContainer = ()  => {
    // fetch a la base de datos o ajax
    const carrito = [];
    // const [listProduct, setListProducts ] = useState();
    // const { nombreProducto } = useParams();

    // useEffect( () => {
    //     async function getDataFromMELI() {
    //         const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${nombreProducto}`);
    //         const data = await response.json();
    //         setListProducts(data.results);
    //     }
    //     getDataFromMELI();
    // }, [nombreProducto])

    return (
        <div>
            <header>
                <NavbarComponent cart={carrito}/>
            </header>
            <section>
                <Link to={'/detalle/:nombreProducto'}>Ver producto</Link>
            </section>
           
        </div>
    )
}


    

