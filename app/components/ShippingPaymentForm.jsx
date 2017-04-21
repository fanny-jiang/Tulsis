import React, { Component } from 'react'

export default function ShippingPaymentForm(props) {
  const handleChange = props.handleChange
  const handleSubmit = props.handleSubmit

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
                value=''
              />
            </label>
          </div>
          <div>
            <label>Credit Card Number
          <input
                name="ccnumber"
                type="number"
                onChange={handleChange}
                value=''
              />
            </label>
          </div>
          <div>
            <label>Credit Card Type
          <input
                name="cctype"
                type="text"
                onChange={handleChange}
                value=''
              />
            </label>
          </div>
          <div>
            <label>CVC Validation
          <input
                name="cvc"
                type="number"
                onChange={handleChange}
                value=''
              />
            </label>
          </div>
          <div>
            <label>Expiration Date
          <input
                name="expiry"
                type="date"
                onChange={handleChange}
                value=''
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
                value=''
              />
            </label>
          </div>
          <div>
            <label>Street Name and Number
          <input
                name="street"
                type="text"
                onChange={handleChange}
                value=''
              />
            </label>
          </div>
          <div>
            <label>City
          <input
                name="city"
                type="text"
                onChange={handleChange}
                value=''
              />
            </label>
          </div>
          <div>
            <label>Zip Code
          <input
                name="zip"
                type="number"
                onChange={handleChange}
                value=''
              />
            </label>
          </div >
          <div>
            <label>State
          <input
                name="state"
                type="text"
                onChange={handleChange}
                value=''
              />
            </label>
          </div >
        </fieldset >
        <div >
          <button
            type="submit"
            className="btn btn-success"
            Submit Information
          />
        </div>
      </form >
    </div >
  )
}

