import React, { Component } from 'react'
import { Link } from 'react-router'

export default function ShippingPaymentForm(props) {
  const cart = props.cart
  const handleChange = props.handleChange
  const handlePaymentSubmit = props.handlePaymentSubmit
  const handleShipSubmit = props.handleShipSubmit
  const inputPaymentName = props.inputPaymentName
  const inputccNumber = props.ccNumber
  const inputccType = props.ccType
  const inputcvc = props.cvc
  const inputExpiry = props.expiry
  const inputShippingName = props.shippingName
  const inputStreet = props.street
  const inputCity = props.city
  const inputZip = props.zip
  const inputState = props.state
  let showPayHideShip = false

  return (
    <div className="main-container">

      {/* Header */}
      <h3 className="page-header">Checkout</h3>
      <p className="heading">Please enter your payment and shipping information below.</p>

      {/* Form */}
      <div className="ship-pay-form">

        {/* Payment section */}
        <form onSubmit={handlePaymentSubmit}>
          <fieldset className="payment">
            <legend>Payment Info</legend>
            <div>
              <label>Name</label>
              <input
                name="paymentName"
                type="text"
                onChange={handleChange}
                value={inputPaymentName}
              />
            </div>
            <div>
              <label>Credit Card Type</label>
              <input
                name="ccType"
                type="text"
                onChange={handleChange}
                value={inputccType}
              />
            </div>
            <div>
              <label>Credit Card Number</label>
              <input
                name="ccNumber"
                type="number"
                onChange={handleChange}
                value={inputccNumber}
              />
            </div>
            <div>
              <label>CVC Code</label>
              <input
                name="cvc"
                type="number"
                onChange={handleChange}
                value={inputcvc}
              />
            </div>
            <div>
              <label>Expiration Date</label>
              <input
                name="expiry"
                type="date"
                onChange={handleChange}
                value={inputExpiry}
              />
            </div>
          </fieldset >

          {/* 'Submit Payment' Button */}
          <div >
            <button
              className="submit-pay-btn">
              Submit Payment Information</button>
          </div>

        </form >

        {/* Shipping section */}
        <form
        disabled={showPayHideShip}
        onSubmit={handleShipSubmit}>
          <fieldset className="shipping">
            <legend>Shipping Info</legend>
            <div>
              <label>Name</label>
              <input
                name="shippingName"
                type="text"
                onChange={handleChange}
                value={inputShippingName}
              />
            </div>
            <div>
              <label>Street</label>
              <input
                name="street"
                type="text"
                onChange={handleChange}
                value={inputStreet}
              />
            </div>
            <div>
              <label>City</label>
              <input
                name="city"
                type="text"
                onChange={handleChange}
                value={inputCity}
              />
            </div>
            <div>
              <label>Zip Code</label>
              <input
                name="zip"
                type="number"
                onChange={handleChange}
                value={inputZip}
              />
            </div >
            <div>
              <label>State</label>
              <input
                name="state"
                type="text"
                onChange={handleChange}
                value={inputState}
              />
            </div >
          </fieldset >

          {/* 'Complete Order' Button */}
          <div >
            <Link to="/confirmation">
              <button
              value={cart.id}
              className="complete-order-btn"
              onClick={handleShipSubmit}
              >Complete Order</button>
            </Link>
          </div>

        </form >
      </div>
    </div >
  )
}


/*
STEF EDITS -- in progress, maybe useless

        <h3>Payment Information</h3>
        <p>
          <label>Name</label>
          <input name="paymentName" onChange={handleChange} value={inputPaymentName} />
        </p>
        <p>
          <label>Credit Card Number</label>
          <input name="ccNumber" type="number" onChange={handleChange} value={inputccNumber} />
        </p>
        <p>
          <label>Credit Card Type</label>
          <input name="ccType" onChange={handleChange} value={inputccType} />
        </p>
        <p>
          <label>CVC Code</label>
          <input name="cvc" type="number" onChange={handleChange} value={inputcvc} />
        </p>
        <p>
          <label>Exp Date</label>
          <input name="expiry" type="date" onChange={handleChange} value={inputExpiry} />
        </p>

        <h3>Shipping Information</h3>
        <p>
          <label>Name</label>
          <input name="shippingName" onChange={handleChange} value={inputShippingName} />
        </p>
        <p>
          <label>Street</label>
          <input name="street" onChange={handleChange} value={inputStreet} />
        </p>
        <p>
          <label>City</label>
          <input name="city" onChange={handleChange} value={inputCity} />
        </p>
        <p>
          <label>Zip Code</label>
          <input name="zip" type="number" onChange={handleChange} value={inputZip} />
        </p>
        <p>
          <label>State</label>
          <input name="state" onChange={handleChange} value={inputState} />
        </p>

        <div>
          <button className="complete-order-btn">Complete Order</button>
        </div>

*/