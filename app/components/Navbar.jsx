import React from 'react'
import { Link } from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'

export default function Navbar(props) {
  return (
    <div>

      {/* floating element with login/signup and cart links */}
      <div className="navbar-user-menu">
          { props.user
            ? <WhoAmI />
            : <span>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </span> }
        <Link to="/cart">
          <img src="/images/cart_icon.jpeg" className="icon" />
        </Link>
      </div>

      {/* topmost block element with store name */}
      <div className="navbar-title">Babies</div>

      {/* bottom block element with navigation links */}
      <div className="navbar-bottom">
        <Link to="/catalog">All</Link>
        <Link to="/catalog/newborns">Newborns</Link>
        <Link to="/catalog/infants">Infants</Link>
        <Link to="/catalog/toddlers">Toddlers</Link>
      </div>

    </div>
  )
}




// PREVIOUS JSX:

/*
<div>
  <div className="container-fluid">
    <div>
      <ul className="nav navbar-nav navbar-right float_right">
        <li>{props.user ? <WhoAmI /> : <Login />}</li>
        <li>
          <Link to="/order">
            <img src='../../public/images/cart_icon.png' />
          </Link>
        </li>
      </ul>
      <h1>
        <Link className="navbar-brand" to="/home">TULSI'S BABY BOUTIQUE</Link>
      </h1>
    </div>
  </div>
  <div className="container-fluid">
    <ul className="nav justify-content-center">
      <li className="nav-item float_right">
        <Link to="/catalog" >All</Link>
      </li>
      <li className="nav-item float_right">
        <Link to="/catalog/newborns">Newborns</Link>
      </li>
      <li className="nav-item float_right">
        <Link to="/catalog/infants">Infants</Link>
      </li>
      <li className="nav-item float_right">
        <Link to="/catalog/toddlers">Toddlers</Link>
      </li>
    </ul>
  </div>
</div>
*/
