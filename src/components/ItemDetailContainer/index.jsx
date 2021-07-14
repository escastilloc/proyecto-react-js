import { useEffect } from "react";
import { useState } from "react";
import { Item } from '../../components/Item';
import { NavbarComponent } from "../NavbarComponent"
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = ()  => {
    
    const [listProducts, setListProducts] = useState([]);
    const { nombreProducto } = useParams();
    const carrito = [];

    useEffect( () => {
        async function getDataFromMELI() {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${nombreProducto}`);
            const data = await response.json();
            setListProducts(data.results);
        }
        getDataFromMELI();
    }, [nombreProducto])
    
    return (
        <>
             <header>
                <NavbarComponent cart={carrito}/>
            </header>
            <section>
                {
                    listProducts.map(element => {
                        return (
                            <div>
                                <Item key={element.id} name={element.title} price={element.price} img={element.thumbnail}/>
                            </div>
                        )
                    })
                }
               
            </section>
        </>
    )
}