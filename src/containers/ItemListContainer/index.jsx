import { useEffect, useContext } from "react";
import { useParams } from "react-router";
import ItemListComponent from "../../components/ItemListComponent";
import { SHOPCONTEXT } from "../../context/ShopContext";

function ItemListContainer(){

    const {itemsCategory, setCategoryToView} = useContext(SHOPCONTEXT)
    const {category} = useParams()

    useEffect(()=>{

        setCategoryToView(category)

    },[category])

    return(
        <>
            <ItemListComponent itemsCategory={itemsCategory}/>  
        </>
    );
}

export default ItemListContainer;