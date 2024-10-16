import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <div>
      <header  class="Header">
        <h2 className='logo'>&lt; flood.p /&gt;</h2>
        <nav class="Nav">
            <a href="#">Home</a>
            <a href="#">Predict</a>
            <a href="#">Contact</a>
            <a href="#">About</a>
        </nav>
      </header>
    </div>
  )
}

export default Header;