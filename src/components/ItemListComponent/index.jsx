import React from "react";
import ItemComponent from "../ItemComponet";
import "./style.scss";

function ItemListComponent({itemsCategory}){

    return(
        <div id="itemListDisposition">
            {itemsCategory.map(item =>{return <ItemComponent  key={item.id} itemInfo={item}/> } ) }
        </div>
    );
}

export default ItemListComponent;