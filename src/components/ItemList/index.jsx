import { useEffect } from "react";
import { useState } from "react";
import { Item } from '../../components/Item';

export const ItemList = ()  => {
    
    const [listProducts, setListProducts] = useState([]);

    useEffect( () => {
        async function getDataFromMELI() {
            const response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=alimentoparaperro");
            const data = await response.json();
            setListProducts(data.results);
        }
        getDataFromMELI();
    }, [])
    
    return (
        <>
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