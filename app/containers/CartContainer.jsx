import Cart from '../components/Cart'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import axios from 'axios'

const mapStateToProps = (state) => {
  return {
    cart: state.cart.orderItems
  }
}

export default connect(mapStateToProps)(Cart)

