import { useContext } from "react";
import { CARTCONTEXT} from "../../context/CartContext"
import iconoCarrito from "../../img/shopping-cart.png";
import './style.scss';

function CartWidged() {

    const {quantityItems} = useContext(CARTCONTEXT)

    return(
        <div id="cartWidget">
            <img src={iconoCarrito} alt="Icono de carrito"/>
            <span id={quantityItems === 0 ? "hide" : "cartWidgetNumber"}>{quantityItems}</span>
        </div>
    );
}

export default CartWidged;