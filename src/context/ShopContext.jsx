import {createContext, useEffect, useState} from "react";
import { getFirestore } from "../firebase";

export const SHOPCONTEXT = createContext()

function ComerceProvider({children}){

    const[itemsDB,setItemsDB] = useState([])
    const[itemDetails, setItemDetails] = useState({}) 
    const[itemsCategory, setItemsCategory] = useState([])
    
    function setCategoryToView(category){
        const categoryDB = itemsCategory.filter(item=>item.category === category)

        if(category != null || category != undefined){
            if(itemsCategory.length !== categoryDB.length){
                const itemListSelection = itemsDB.filter(product=> product.category === category)
                setItemsCategory(itemListSelection)
            }
        }else{
            setItemsCategory(itemsDB)
        }
    }

    function setItemToView(x){
        const selection = itemsDB.find(product => product.id === x)
        setItemDetails(selection)
        
    }

    function isInBD(idItem){
        const items = itemsDB.find(res=> res.id === idItem)
        if(items === undefined){
            return false;
        }else{
            return true
        }
    }

    useEffect(()=>{
        async function getDB (){

            const DB = getFirestore(); // Contectando a la BD 
            const COLLETION = DB.collection('productos'); // Tomando la coleccion de productos
            const response = await COLLETION.get();
            const itemList = response.docs.map(res => res.data())

            setItemsDB(itemList);
            setItemsCategory(itemList);          
            console.log(itemList)

        }

        getDB();


    },[])

    return(

        <SHOPCONTEXT.Provider value={{itemsDB, itemDetails, itemsCategory, setItemToView, setCategoryToView, isInBD}}>
            {children}
        </SHOPCONTEXT.Provider>
    )
}

export default ComerceProvider;