import { useState } from "react";
import { NavbarComponent } from "../../components/NavbarComponent"
export const ItemListContainer = ()  => {
    // fetch a la base de datos o ajax
    const carrito = [];

    return (
        <div>
            <header>
                <NavbarComponent cart={carrito}/>
            </header>
            <section>
                
            </section>
           
        </div>
    )
}


    
