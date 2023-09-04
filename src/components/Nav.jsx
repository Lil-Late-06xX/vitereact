/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className='navBar'>
        <div className="links">
            <Link to="/" > Shop</Link>
            <Link to="/cart" >
                <ShoppingCart size={35}/>
            </Link>
        </div>
    </div>
  )
}

export default Nav