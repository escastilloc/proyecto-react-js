import { useEffect } from "react";
import { useState } from "react";
import { Item } from '../../components/Item';
import { NavbarComponent } from "../NavbarComponent"
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = ()  => {
    
    const [listProducts, setListProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [isAdded, setIsAdded] = useState(false)
    const { nombreProducto } = useParams();
    // const carrito = [];
    


    useEffect( () => {
        async function getDataFromMELI() {
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${nombreProducto}`);
            const data = await response.json();
            setListProducts(data.results);
        }
        getDataFromMELI();
    }, [nombreProducto])

    function addToCart(product){
        setCart([...cart, product ])
        setIsAdded(true);
    }
    
    return (
        <>
             <header>
                <NavbarComponent cart={cart}/>
            </header>
            <section>
                {
                    listProducts.map(element => {
                        return (
                            <div>
                                {isAdded ? <button>Terminar compra</button> :
                                <Item key={element.id} name={element.title} price={element.price} stock={element.stock} addToCart={addToCart} listProducts={listProducts} img={element.thumbnail}/>
                                }
                            </div>
                        )
                    })
                }
               
            </section>
        </>
    )
}