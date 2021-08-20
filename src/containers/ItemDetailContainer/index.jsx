import ItemDetailComponent from "../../components/ItemDetailComponent";
import React, { useContext, useEffect} from "react";
import { useParams } from "react-router";
import { SHOPCONTEXT } from "../../context/ShopContext";
import { Spinner } from "react-bootstrap";

function ItemDetailContainer(){

    const {itemDetails, setItemToView, itemsDB} = useContext(SHOPCONTEXT)

    const {id} = useParams();

    useEffect(()=>{

        setItemToView(id)

    },[id,itemsDB])

    return(  

        <>
            {itemDetails === {} || itemDetails === undefined  ?
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner> 
            : <ItemDetailComponent itemDetailsProp = {itemDetails}/>}
        </>
    )
}

export default ItemDetailContainer;