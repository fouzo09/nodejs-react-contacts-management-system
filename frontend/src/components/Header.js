import React from 'react'
import { Link } from 'react-router-dom'
import "./style/header.css"


function Header() {
  return (
    <>
      <nav>
        <div className='logo'>Contact Management System</div>
        <div>
          <ul className='menu'>
            <li>
              <Link to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/add">
                Nouveau contact
              </Link>
            </li>
            <li>
              <Link to="about">
                A propos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header