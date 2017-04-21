import { connect } from 'react-redux'
import ShippingPaymentForm from ' ../components/ShippingPaymentForm'
import React, {Component} from 'react'

class ShippingPaymentFormContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      paymentName: '',
      ccnumber: 0,
      cctype: '',
      cvc: 0,
      expiry: '',
      shippingName: '',
      street: '',
      city: '',
      zip: '',
      state: ''
    }
  }
}