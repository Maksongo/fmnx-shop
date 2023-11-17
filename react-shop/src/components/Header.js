import React from 'react'

export default function Header() {
  return (
    <header>
      <nav>
          <div className="Header-logo-div">
            <img className="header-logo" src="img/logo-icon.png" alt="" />
            <span className='logo'>FMNX Store</span>
            </div>
            <ul className='nava'>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            </nav>
        {/* <div className='presentation'></div> */}
    </header>
  )
}
