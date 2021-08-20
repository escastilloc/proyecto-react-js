import React, { useContext, useEffect} from "react";
import {CARTCONTEXT} from "../../context/CartContext";
import './style.scss';


function ItemCountComponent ({itemDetails, isCartOrDetail}){

    const {cartContent, itemCountValidator, itemCountText, itemCount, itemCartOnAdd} = useContext(CARTCONTEXT)

    useEffect(()=>{

    },[cartContent, isCartOrDetail])

    return(
        <>
            <div id="itemCountContainer">
                <div id="itemCountStyle">
                    <button type="button" className="buttonsCountStyle" onClick={()=>{itemCountValidator("-", itemDetails, isCartOrDetail)}}>-</button>
                    {isCartOrDetail === "Cart" ? <h4>{cartContent.find(res => res.id === itemDetails.id).unitsToBuy}</h4> : <h4>{itemCount}</h4>}
                    <button type="button" className="buttonsCountStyle" onClick={()=>{itemCountValidator("+", itemDetails, isCartOrDetail)}}>+</button>
                </div>

                <span>stock disp. {itemDetails.stockDB}</span>
                    
                <button type="button" className={isCartOrDetail === "Cart" ? "noDisplay" : "buttonAddToCart"} onClick={()=>itemCartOnAdd(itemDetails, itemCount, isCartOrDetail)}>Agregar al carro</button>
            </div>
            <span>{itemCountText}</span>
        </>
    )
}

export default ItemCountComponent;


