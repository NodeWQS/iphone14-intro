import React from 'react'
import logo from '../../photos/logo.png'
import '../../styles/footer.scss'

export const Footer = () => {
  return (
    <footer>
        <div className="hero_container">
            <ul className="links">
                <li><span>Политика конфиденциальности</span></li>
                <li><img src={ logo } alt="" /></li>
                <li><a href="tel:+380504565656">+38 050-456-56-56</a></li>
            </ul>
        </div>
    </footer>
  )
}
