import { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { Item } from "../Item";

export const ItemList = () => {
    
    const [listProducts, setListProducts] = useState([]);
    const [cart, setCart] = useState([])
    const [isAdded, setIsAdded] = useState(false)
    function addToCart(product){
        setCart([...cart, product ])
        setIsAdded(true);
    }

    const CONTEXT = useContext(ShopContext);

    return (
        <div>
            {CONTEXT.listProducts.map(element => {
                return <div>
                        {isAdded ? <button>Terminar compra</button> :
                        <Item key={element.id} name={element.title} price={element.price} stock={element.stock} addToCart={addToCart} listProducts={listProducts} img={element.thumbnail}/>
                        }
                       </div>
                })}
        </div>
    )
}
