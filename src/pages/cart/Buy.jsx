/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import CartItem from './CartItem';
import './cart.css'

const Buy = () => {
  const {cartItems ,getTotal} = useContext(ShopContext);
  let totalAmount = getTotal();


const navi = useNavigate();




  return (

    <div className="cart">
      <div>
        <h1>Your Cart</h1>
      </div>
      <div className="cartItems">

        {PRODUCTS.map((prod)=>{
          if (cartItems[prod.id] !== 0){
            return <CartItem data={prod} key={prod.id}/>
          }
        })}
      </div>

{ totalAmount > 0 ? 
      <div className='checkout'>
        <p>Total: {totalAmount} $</p>
        <button onClick={()=>navi('/')} >Continue Shopping</button>
        <button >Checkout</button>
      </div> : <h1> is empty </h1> }
    </div>
    
  )
}

export default Buy;