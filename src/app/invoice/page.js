





"use client";

import AppContainer from "@/components/Contaner/container";
import ItemCard from "@/components/ItemCard/itemCard";
import { useState } from "react";


export default function Invoice(){
    const [cart, setCart] = useState([]);

    const getTotal = () => {
        return cart
          ?.map((el) => el.product.price * el.qt)
          ?.reduce((a, b) => a + b, 0);
      };
    return( 
      <div>
        hiii
      </div>

    //    <div>
    //     <div>
    //     <AppContainer>
    //     <h2>Cart List</h2>
    //     <br />
    //     <div className="products-grid">
    //       {cart.map((el) => (
    //         <ItemCard item={el.product} />
    //       ))}
    //     </div>
    //   </AppContainer>
      
    // </div>
    // <div className="cart-action">
    //             <AppContainer>
    //               <button>
    //                 Checkout - {Number(getTotal()).toLocaleString("en")} IQD
    //               </button>
    //             </AppContainer>
    //           </div>
    // </div>
    )
}