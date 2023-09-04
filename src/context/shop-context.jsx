/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../products';

export const ShopContext = createContext(null);


export const ShopContextProvider= (props) => {

    const getOldCart=()=>{
        let cart = {};
        for (let i = 1 ; i < PRODUCTS.length + 1 ; i++){
            cart[i] = 0;
        }
        return cart;
    }


    const [cartItems , setCartItems] = useState(getOldCart());


    const updateInput = (newAmount , itemId)=>{

      setCartItems((prev)=>({...prev , [itemId]:newAmount}));
    };


    const getTotal =()=>{
      let total = 0;
      for (const id in cartItems){
        if (cartItems[id] > 0){
          let itemInfo = PRODUCTS.find((pr)=>pr.id === Number(id))
          total += cartItems[id] * itemInfo.price
        }
      }
      return total;
    };
    

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
          ...prev,
          [itemId]: prev[itemId] + 1
        }));
      };


      const removeCart = (itemId) => {
        setCartItems((prev) => ({
          ...prev,
          [itemId]: prev[itemId] - 1
        }));
      };


      const contextValue = {
        cartItems ,
        addToCart ,
        removeCart,
        updateInput,
        getTotal
      }
      




  return (
    <ShopContext.Provider value={contextValue} >
        
        
        
        {props.children}



    </ShopContext.Provider>
  )
}

