import React, { Component } from 'react'

export default function ShippingPaymentForm(props) {
  const handleChange = props.handleChange
  const handleSubmit = props.handleSubmit
  const inputPaymentName = props.inputPaymentName
  const inputccnumber = props.ccnumber
  const inputcctype = props.cctype
  const inputcvc = props.cvc
  const inputexpiry = props.expiry
  const inputshippingName = props.shippingName
  const inputstreet = props.street
  const inputcity = props.city
  const inputzip = props.zip
  const inputstate = props.state

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="payment">
          <legend>Payment Information</legend>
          <div>
            <label>Name
          <input
                name="paymentName"
                type="text"
                onChange={handleChange}
                value={inputPaymentName}
              />
            </label>
          </div>
          <div>
            <label>Credit Card Number
          <input
                name="ccnumber"
                type="number"
                onChange={handleChange}
                value={inputccnumber}
              />
            </label>
          </div>
          <div>
            <label>Credit Card Type
          <input
                name="cctype"
                type="text"
                onChange={handleChange}
                value={inputcctype}
              />
            </label>
          </div>
          <div>
            <label>CVC Validation
          <input
                name="cvc"
                type="number"
                onChange={handleChange}
                value={inputcvc}
              />
            </label>
          </div>
          <div>
            <label>Expiration Date
          <input
                name="expiry"
                type="date"
                onChange={handleChange}
                value={inputexpiry}
              />
            </label>
          </div>
        </fieldset >
        <fieldset className="shipping">
          <legend>Shipping Information</legend>
          <div>
            <label>Name
          <input
                name="shippingName"
                type="text"
                onChange={handleChange}
                value={inputshippingName}
              />
            </label>
          </div>
          <div>
            <label>Street Name and Number
          <input
                name="street"
                type="text"
                onChange={handleChange}
                value={inputstreet}
              />
            </label>
          </div>
          <div>
            <label>City
          <input
                name="city"
                type="text"
                onChange={handleChange}
                value={inputcity}
              />
            </label>
          </div>
          <div>
            <label>Zip Code
          <input
                name="zip"
                type="number"
                onChange={handleChange}
                value={inputzip}
              />
            </label>
          </div >
          <div>
            <label>State
          <input
                name="state"
                type="text"
                onChange={handleChange}
                value={inputstate}
              />
            </label>
          </div >
        </fieldset >
        <div >
          <button className="logout">Checkout</button>
        </div>
      </form >
    </div >
  )
}

