import React, { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Order from './Order';

const showOrders = (props) => {
  let checkout = 0
  props.orders.forEach(el => checkout += Number.parseFloat(el.price))
  return (<div>
    {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className='checkout-cart'>Сумма: {new Intl.NumberFormat().format(checkout)}$</p>
      </div>)
}

const showNothing = () => {
  return (<div className='empty-cart'>
    <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  
  return (
    <header>
      <nav>
          <div className="Header-logo-div">
            <img className="header-logo" src="img/logo.svg" alt="" />
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
                {props.orders.length > 0 ?
                  showOrders(props) : showNothing()}
                </div>
            )}
            </div>
            </nav>
        {/* <div className='presentation'></div> */}
    </header>
  )
}
