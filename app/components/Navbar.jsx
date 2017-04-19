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
                <h1><Link className="navbar-brand" to="/home">TULSI'S BABY BOUTIQUE</Link></h1>
            </div>
            <div>
                <ul className="nav navbar-nav navbar-right">
                    <li>{props.user ? <WhoAmI /> : <Login />}</li>
                    <li><Link to="/order">
                        <span className="glyphicon glyphicon-shopping-cart"></span>
                    </Link></li>
                </ul>
            </div>
        </div>
        <nav className="navbar">
            <div className="container-fluid">
                <ul className="nav navbar-nav navbar-center">
                    <li><Link to="/catalog">All</Link></li>
                    <li><Link to="/catalog/newborns">Newborns</Link></li>
                    <li><Link to="/catalog/infants">Infants</Link></li>
                    <li><Link to="/catalog/toddlers">Toddlers</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}
