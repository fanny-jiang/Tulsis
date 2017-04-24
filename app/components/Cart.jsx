import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import { connect } from 'react-redux'
import { updateCart } from '../action-creators/carts'
import store from '../store'


export default class Cart extends Component {
  constructor(props) {
    super(props)
    this.orderTotal = this.orderTotal.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSubtract = this.handleSubtract.bind(this)
  }

  orderTotal(cart) {
    var prices = []
    cart.map(item => {
      prices.push(item.product.price * item.quantity)
    })
    return prices.reduce((a, b) => a + b, 0)
  }

  handleAdd(evt) {
    console.log('You hit the add button!')
    evt.preventDefault()
    axios.put(`/api/cart/${evt.target.value}/add`)
      .then(res => {
        console.log('RES.DATA: ', res.data)
        store.dispatch(updateCart(res.data.cart))
      })
      .catch(err => console.error('Cannot update quantity', err))
  }

  handleSubtract(evt) {
    console.log('You hit the subtract button!')
    evt.preventDefault()
    axios.put(`/api/cart/${evt.target.value}/subtract`)
      .then(res => {
        // if (res.status === 400) {
        //   window.alert('Can\'t have negative quantity!')
        // }
        store.dispatch(updateCart(res.data.cart))
      })
      .catch(err => console.error('Cannot update quantity', err))
  }

  render() {
    const cart = this.props.cart || [] // cart component is rendering before props had been received; set cart to empty array by default so that code doesn't break when it renders the first time around

    return (
      <div className="main-container">
        {/* Header */}
        <h3 className="page-header">Shopping Cart</h3>

        {/* Order items */}
        {cart.map((orderItem, idx) => (
          <div className="item-container" key={idx}>
            <Link to={`catalog/${orderItem.product.id}`}>
              <img src={orderItem.product.photoUrl} className="item-image" />
            </Link>

            <table className="item-info-table">
              <tbody>
                <tr>
                  <td colSpan="3">
                    <Link to={`catalog/${orderItem.product.id}`}>
                      {orderItem.product.title}
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Qty:</td>
                  <td>{orderItem.quantity}</td>
                  <td><button type="submit" className="addSubtract" onClick={this.handleAdd} value={orderItem.product.id}>+</button>
                    <button type="submit" className="addSubtract" onClick={this.handleSubtract} value={orderItem.product.id}>-</button></td>
                </tr>
                <tr colSpan="3">
                  <td>Remove</td>
                </tr>
              </tbody>
            </table>

            <div className="item-price">
              <p>Unit Price: ${orderItem.product.price}.00</p>
            </div>

          </div>
        ))}

        {/* Price */}
        <div className="price-table clear">
          <table>
            <tbody>
              <tr>
                <td className="label">Subtotal</td>
                <td>${this.orderTotal(cart)}.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Checkout button */}
        <div className="checkout-btn clear">
          <form action="/cart/checkout">
            <input type="submit" value="Checkout" />
          </form>
        </div>

      </div>
    )
  }
}


/* PREVIOUS JSX
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
*/
