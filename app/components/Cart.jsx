import React, { Component } from 'react'
import { Link } from 'react-router'


export default function Cart(props) {
  const cart = props.cart || [] // cart component is rendering before props had been received, set cart to be an empty array by default so that code doesn't break when it renders the first time around
  console.log('PROPS FROM CART: ', cart)
  return (
    <div>
      <h3> CART!!! </h3>
      <div>
        {
          cart.map((orderItem) => (
            <ul key={`orderItem.id`}>
              <li><img src={`orderItem.product.photoUrl`}></img></li>
              <li>{orderItem.product.title}</li>
              <li>{orderItem.quantity}</li>
              <li>{orderItem.product.price}</li>
            </ul>
          ))
        }
      </div>
    </div>
  )
}
