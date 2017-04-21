import React, { Component } from 'react'
import { Link } from 'react-router'


export default function Cart(props) {
  const cart = props.cart || [] // cart component is rendering before props had been received, set cart to be an empty array by default so that code doesn't break when it renders the first time around
  console.log('PROPS FROM CART: ', cart)
  return (
    <div>
      <h3> Shopping Cart </h3>
      <div>
        {
          cart.map((orderItem, idx) => (
            <div style={{
              backgroundColor: 'lightgray',
              padding: '15px',
            }}
              key={idx}>
              <ul>
                <li><img style={{
                  borderStyle: 'solid',
                  borderWidth: '1px',
                  height: '100px',
                  width: '100px'
                }}
                  src={`orderItem.product.photoUrl`}></img></li>
                <li><h3>{orderItem.product.title}</h3></li>
                <li>Quantity: {orderItem.quantity}</li>
                <li>Price: ${orderItem.product.price}.00</li>
              </ul>
            </div>
          ))
        }
      </div>
      <div className="checkout-button-div" align="center">
        <Link className="checkout-button" to="/checkout">Checkout</Link>
      </div>
    </div>
  )
}
