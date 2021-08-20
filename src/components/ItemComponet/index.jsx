import React from "react";
import './style.scss';
import {Link} from "react-router-dom"


function ItemComponent(itemInfo){


     return(

        <div className="card " id="cards">
            <span className="card-header" id="textHeader">{itemInfo.itemInfo.category}</span>
            <div className="card-body text-center" id="containerBody">
                <Link to={`/Detalles/${itemInfo.itemInfo.id}`}><img id="imagen" src={itemInfo.itemInfo.thumbnail} alt={itemInfo.itemInfo.id}/></Link>
                <h5 className="card-title">{itemInfo.itemInfo.title}</h5>
                <span className="card-text">${itemInfo.itemInfo.price}</span>
            </div>
            <div className="card-footer text-muted"><span>Stock: {itemInfo.itemInfo.stock} un.</span></div>
        </div>
    )
}

export default ItemComponent;