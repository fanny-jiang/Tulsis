// nav bar

import React from 'react'
import { Link } from 'react-router'
import Login from './Login'
import WhoAmI from './WhoAmI'

export default function Navbar(props) {
  return (
    <div>
        <div className="container-fluid">
            <div>
            <ul className="nav navbar-nav navbar-right float_right">
                    <li>{props.user ? <WhoAmI /> : <Login />}</li>
                    <li><Link to="/order">
                        <img src='../../public/images/cart_icon.png' />
                    </Link></li>
                </ul>
                <h1><Link className="navbar-brand" to="/home">TULSI'S BABY BOUTIQUE</Link></h1>
            </div>
            <div>

            </div>
        </div>
            <div className="container-fluid">
                <ul className="nav justify-content-center">
                    <li className="nav-item float_right"><Link to="/catalog" >All</Link></li>
                    <li className="nav-item float_right"><Link to="/catalog/newborns">Newborns</Link></li>
                    <li className="nav-item float_right"><Link to="/catalog/infants">Infants</Link></li>
                    <li className="nav-item float_right"><Link to="/catalog/toddlers">Toddlers</Link></li>

                </ul>
            </div>
    </div>
  )
}
