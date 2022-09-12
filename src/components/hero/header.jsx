import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../photos/logo.png'
import '../../styles/header.scss'

export const Header = () => {
  const [click, setClick] = useState('')
  const burgerClick = () => {
    switch (click) {
        case '':
            setClick('active')
            break;
        default:
            setClick('')
            break;
    }
  }
  return (
    <header>
        <nav className="navbar">
            <div className="nav_container">
                <ul className={`nav_links ${click}`}>
                    <li><Link to=''>Что нового</Link></li>
                    <li><Link to=''>Цвет</Link></li>
                    <li><Link to=''>Заказать</Link></li>
                </ul>
                <Link to=''>
                    <div className="logo">
                        <img src={ logo } alt="logo" />
                    </div>
                </Link>
                <div className="phone">
                    <a href='tel:+380504565656'>+38 050-456-56-56</a>
                </div>
                <div className="burger" onClick={burgerClick.bind()}>
                    <div className="row"></div>
                    <div className="row"></div>
                    <div className="row"></div>
                </div>
            </div>
        </nav>
    </header>
  )
}
