import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

export default function Header() {
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
            <FaCartShopping className='shop-cart-button' />
            </div>
            </nav>
        {/* <div className='presentation'></div> */}
    </header>
  )
}
