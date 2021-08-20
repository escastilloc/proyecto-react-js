import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss"
import ItemCountComponent from "../ItemCountComponent"

function CartInfoComponent({itemDetails, remove}){

    return (
 
        <tr>
            <td><button id="buttonDelete" onClick={()=>remove(itemDetails.id,"yes")}>x</button></td>
            <td><Link to={`/Detalles/${itemDetails.id}`}><img id="imagen" src={itemDetails.thumbnail} alt={itemDetails.title}/></Link></td>
            <td id=""><p>{itemDetails.title}</p></td>
            <td></td>
            <td><p>C/U {itemDetails.price}</p></td>
            <td><ItemCountComponent itemDetails={itemDetails} isCartOrDetail={"Cart"}/></td>
            <td><p>{itemDetails.totalAmount}</p></td>
        </tr>

    )
}

export default CartInfoComponent;