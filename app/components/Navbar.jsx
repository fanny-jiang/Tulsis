import React from 'react'
import { Link } from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'

export default function Navbar(props) {
  return (
    <div>

      {/* left block element with Tulsi */}
      <div className="tulsi-pic">
        <img className='tulsi' src="/images/tulsi.jpg" />
      </div>

      {/* floating element with login/signup and cart links */}
      <div className="navbar-user-menu">
        {props.user
          ? <WhoAmI />
          : <Login />}
        <Link to="/cart">
          <img src="/images/cart_icon.jpeg" className="icon" />
        </Link>
      </div>

      {/* topmost block element with store name */}
      <div className="navbar-title">
        <Link to="/catalog">Tulsi's</Link>
      </div>

      {/* bottom block element with navigation links */}
      <div className="navbar-bottom">
        <Link to="/catalog">All</Link>
        <Link to="/catalog/Newborn">Newborns</Link>
        <Link to="/catalog/Infant">Infants</Link>
        <Link to="/catalog/Toddler">Toddlers</Link>
      </div>

    </div>
  )
}
