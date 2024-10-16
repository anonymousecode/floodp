import React from 'react'
import '../styles/footer.css'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className='footer'>{`Copyright © <flood.p/>  ${year}`}</footer>
  )
}

export default Footer