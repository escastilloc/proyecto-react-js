import {createContext, useEffect, useState} from "react"
import { getFirestore } from "../firebase"

export const CARTCONTEXT = createContext()

export function CartProvider({children}){

   
    const[cartContent,setCartContent] = useState([]) 
    const[quantityItems,setQuantityItems] = useState(0)
    const[infoForm, setInfoForm] = useState({name:"", email:"", direction:"", tel:""}) 


    //Estados del producto actual
    const[itemCount, setItemCount] = useState(1) 
    const[itemCountText, setItemCountText] = useState("") 

    //Estados para conteo cartWidged
    const [showIdOrder, setShowIdOrder] = useState(false); 
    const [idCompra, setIdCompra] = useState("")

    const [showForm, setShowForm] = useState(false)

    
    function endBuyingProcess(){
        const order = {buyer:{infoForm}, productsInOrder:cartContent}

        if (order.buyer.infoForm.email === order.buyer.infoForm.emailConfirmed){

            const DB = getFirestore();
            const COLLECTION = DB.collection("pedidos")
            COLLECTION.add(order).then(({id})=>{setIdCompra(id)}).then(()=>setShowIdOrder(true)).then(itemCartOnClear()).then(setShowForm(false))
            
            setShowIdOrder(true)
            setTimeout(()=>setShowIdOrder(false),10000)

        } else{
            validationText(`los correos no son iguales, por favor confirmar correos`)

        }
        
    }


    function changeItemInCart(item, units){

        if(isInCart(item.id)){

            const productInCart = findItem(item.id)[0]

            const newProduct = {...productInCart, unitsToBuy: (productInCart.unitsToBuy + units), totalAmount: ((productInCart.unitsToBuy + units)*productInCart.price)}
            const newCartWProduct = itemCartOnRemove(item.id,"no");
            const newCartValue = [...newCartWProduct, newProduct]
            setCartContent(newCartValue.sort((a,b)=>{

                    if (a.title > b.title) {
                        return 1;
                    }
                    if (a.title < b.title) {
                        return -1;
                    }
                    return 0
                    }
                )
            )
        }
    }


    
     
    function itemCartOnAdd(item, units, isCartOrDetail){ 

        const realStock = itemRealStock(item.id, item.stockDB)

        if(realStock>0 || isCartOrDetail==="Cart"){
            
            if(isInCart(item.id)){
                changeItemInCart(item, units)
                const productInCart = findItem(item.id)[0]
                validationText(`¡¡Producto agregado, tiene ${productInCart.unitsToBuy} en el carrito!!`)
            }else{
                
                const addCartValue = [...cartContent, {...item, unitsToBuy:units, totalAmount:(units*item.price)}]
                setCartContent(addCartValue)
                validationText(`¡¡Producto agregado, tiene ${units} en el carrito!!`)
            }
            setItemCount(1)
        }else{
            validationText(`¡¡No se puede agregar mas al carrito, tiene actualmente ${item.stockDB - realStock} en el carrito!!`)
        }
    }

    

    
    function validationText(text){ 
        setItemCountText(text)
        setTimeout(()=>setItemCountText(""),2500)
    }

    function itemCartOnRemove(id, decition){
        const newCartContent = cartContent.filter(res=> res.id !== id)
        if(decition === "yes"){
            setCartContent(newCartContent)
        }else{
            return newCartContent
        }
    }

    function itemCartOnClear(){
        setCartContent([])
    }

    function findItem(itemId){
        return cartContent.filter(res=>res.id ===itemId)
    }

    function isInCart(idItem){
        const items = cartContent.find(res=> res.id === idItem)
        if(items === undefined){
            return false;
        }else{
            return true
        }
    }

    function totalAmountInCart(){
        
        const cartLength = cartContent.length
        
        if(cartLength === 0){
            return 0
        }else{
            const totalItems = cartContent.map(res=>res.totalAmount).reduce((prev, actual)=> {return prev + actual})
            const isUnit = totalItems !== quantityItems
            if(isUnit && cartLength > 1 ){
                return totalItems;
            }else if (isUnit){
                return cartContent[0].totalAmount
            }
        }

    }

     function itemRealStock(idItem, stockInDB){
        return isInCart(idItem) ? stockInDB - findItem(idItem)[0].unitsToBuy: stockInDB;
    }

    function itemCountValidator(x, item, isCartOrDetail){
        
        const stockItemAvalible = itemRealStock(item.id, item.stockDB)

        console.log(isCartOrDetail)

        if(isCartOrDetail==="Detail"){

            console.log("1")
            if(x==="-"){
                if((itemCount-1)>=1){
                    setItemCount(itemCount-1)
                }
            } else if(x==="+"){
                if((stockItemAvalible-itemCount)>=1 && stockItemAvalible >= 1){
                    setItemCount(itemCount+1)
                }
                else{
                    if(isInCart(item.id)){
                        validationText(`¡¡No se puede agregar mas, tiene actualmente ${item.stockDB - stockItemAvalible} en el carrito!!`)
                    }else{
                        validationText(`¡¡No se puede agregar mas, sin suficiente stock!!`)
                    }
                }
            }
        }else if(isCartOrDetail==="Cart"){

            console.log("2")
            const unitsInCart = findItem(item.id)[0].unitsToBuy

            if(x==="-"){
                if((unitsInCart-1)>=1){
                    changeItemInCart(item, -1)
                }
            } else if(x==="+"){
                if(stockItemAvalible>=1){  
                    changeItemInCart(item, 1)
                }else if(isInCart(item.id)){
                    validationText(`¡¡No se puede agregar mas, todo el stock agregado`)
                }else{
                    validationText(`¡¡No se puede agregar mas, sin suficiente stock!!`)
                }
            }      
            
        } 
    }

    function quantityWidget(){
        const cartLength = cartContent.length

        if(cartLength === 0){
            setQuantityItems(0)
        }else{
            const totalItems = cartContent.map(res=>res.unitsToBuy).reduce((prev, actual)=> {return prev + actual})
            const isUnit = totalItems !== quantityItems
            if(isUnit && cartLength > 1 ){
                setQuantityItems(totalItems);
            }else if (isUnit){
                setQuantityItems(cartContent[0].unitsToBuy)
            }
        }
    }

    useEffect(()=>{
        quantityWidget()
    },[cartContent])

    return(

        <CARTCONTEXT.Provider value={{itemCartOnAdd, itemCountValidator, totalAmountInCart, itemCartOnRemove, itemCartOnClear, endBuyingProcess, setInfoForm, showIdOrder, setShowIdOrder,idCompra, infoForm, itemCount, itemCountText, cartContent, quantityItems,showForm, setShowForm}}>
            {children}
        </CARTCONTEXT.Provider>
    )

}

export default CartProvider;
