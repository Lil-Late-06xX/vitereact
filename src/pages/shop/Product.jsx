/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'

const Product = ({data}) => {
    let id = data.id
    let name = data.productName
    let img = data.productImage
    let price = data.price
    const {addToCart , cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
  return (
    <div className='product'> 
        <img src={img} alt=""/>
            <div className="description">
                        <p>

                        <b>{name}</b>

                        </p>
                        <p>

                            {price}$
 

                        </p>
            </div>
            <button onClick={()=>{
                addToCart(id)
            }} className="addToCartBttn">Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>} </button>
    </div>
  )
}

export default Product;