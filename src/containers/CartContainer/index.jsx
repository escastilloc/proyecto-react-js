import { useContext, useEffect, useState} from "react";
import { Container, Row, Col, Button, Form, Modal} from "react-bootstrap";
import CartInfoComponent from "../../components/CartInfoComponent"
import { CARTCONTEXT } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./style.scss";
import CheckOutComponent from "../../components/CheckOutComponent";

function CartContainer(){

    const {itemCartOnRemove, cartContent,itemCountText, itemCartOnClear, addInfoForm, infoForm, setInfoForm,  endBuyingProcess ,showIdOrder, setShowIdOrder,idCompra, totalAmountInCart,showForm, setShowForm} = useContext(CARTCONTEXT)

    useEffect(()=>{


    },[idCompra,cartContent])

    return(


        showForm ?

            <>
                <CheckOutComponent endBuyingProcess={endBuyingProcess} setInfoForm={setInfoForm} infoForm={infoForm} itemCountText={itemCountText}/>
                
                <button onClick={()=>setShowForm(false)}>Regresar</button>
                <span>{itemCountText}</span>
            </>

        : 

            cartContent.length !== 0 ? 

                <div>
                    <table>
                        {cartContent.map(res=>{return <CartInfoComponent key={res.id} itemDetails={res} remove={itemCartOnRemove} />})}
                    </table>
                    <div id="checkoutLegend">
                        <div id="cleanCart">
                            <button onClick={()=>itemCartOnClear()}>Vaciar el carrito</button>
                        </div>

                        <div id="resumeCart">
                            <h2>Resumen de tu compra</h2>
                            <h3>Total a pagar <span>${totalAmountInCart()}</span></h3>
                            <button onClick={()=>setShowForm(true)}>Avanzar con la compra</button>
                        </div>
                    </div>
                </div>
            
            :    

            <div>
                <h3>No hay productos en el carrito</h3>
                {showIdOrder === true && idCompra !== "" ? <h2>El codigo de tu ultima compra es {idCompra} </h2>: ""}
               <br/>
               <br/>

                <Link to="/"><Button >Ir a la tienda</Button></Link>
            </div>
        
    );
}

export default CartContainer;
