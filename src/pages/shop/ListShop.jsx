/* eslint-disable no-unused-vars */
import React from 'react'
import Product from './Product'
import {PRODUCTS} from '../../products'
import './shop.css'

  const ListShop = () => {
    return (

        
     <div className="shop">

            <div className="shopTitle">

                <h1>Shop</h1>

            </div>





            <div className="products">
                {PRODUCTS.map((prod) => (
            
                <Product data={prod}  key={prod.id}/>
                

                ))}
            </div>


     </div>



    );
  };
  

export default ListShop;