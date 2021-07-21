import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

export const ItemDetailContainer = ()  => {

    const CONTEXT = useContext(ShopContext);


    return (
        <div>
            <h1>{CONTEXT}</h1>
            <Link to="/">Ir a home</Link>
            detalle de producto          
        </div>
    )
}