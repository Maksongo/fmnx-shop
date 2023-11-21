import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Order from './Order';

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  
  return (
    <header>
      <nav>
          <div className="Header-logo-div">
            <img className="header-logo" src="img/logo-icon.png" alt="" />
            <span className='logo'>FMNX Store</span>
            </div>
            <div className='header-nav-buttons'>
            <ul className='nava'>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <FaCartShopping onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

            {cartOpen && (
              <div className='shop-cart'>
                {props.orders.map(el => (
                  <Order key={el.id} item={el} />
                ))}
                </div>
            )}
            </div>
            </nav>
        {/* <div className='presentation'></div> */}
    </header>
  )
}
