/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext} from 'react'
import { ShopContext } from '../../context/shop-context'

const CartItem = ({data}) => {
    let id = data.id
    let name = data.productName
    let img = data.productImage
    let price = data.price
    const {cartItems , addToCart , removeCart , updateInput} = useContext(ShopContext);
  return (
    
    <div className="cartItem">
        


        <img src={img} alt=""/>
        <div className="description">
                        <p>

                        <b>{name}</b>

                        </p>
                        <p>

                            {price}$
 

                        </p>

                        <div className="countHandler">
                            <button onClick={()=>{removeCart(id)}} > - </button>
                            <input onChange={(e)=>updateInput(Number(e.target.value ), id)} type="number" value={cartItems[id]} />
                            <button onClick={()=>{addToCart(id)}} > + </button>
                        </div>
        </div>






    </div>
    
  )
}

export default CartItem;