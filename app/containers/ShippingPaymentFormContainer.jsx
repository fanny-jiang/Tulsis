import { connect } from 'react-redux'
import ShippingPaymentForm from '../components/ShippingPaymentForm'
import React, { Component } from 'react'
import { addNewSPInfo } from '../action-creators/shippingPayment'
import axios from 'axios'
import store from '../store'
import { updateCart } from '../action-creators/carts'

class ShippingPaymentFormContainer extends Component {
  constructor(props) {
    super(props)
    // console.log('PROPS FROM CONTAINER', props)
    this.state = {
      paymentName: '',
      ccNumber: 0,
      ccType: '',
      cvc: 0,
      expiry: '',
      shippingName: '',
      street: '',
      city: '',
      zip: '',
      state: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handlePaymentSubmit = this.handlePaymentSubmit.bind(this)
    this.handleShipSubmit = this.handleShipSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }
  handleShipSubmit(evt) {
    evt.preventDefault()
    this.props.addNewSPInfo(this.state)
    // we need to interpolate orderId
    // console.log('EVT STUFF', evt.target.value)
    axios.put(`/api/orders/${evt.target.value}/buy`,
      {
        address: {
          street: this.state.street,
          city: this.state.city,
          zip: this.state.zip,
          state: this.state.state
        }
      })
      .then(res => {
        console.log('RES.DATA: ', res.data)
        store.dispatch(updateCart(res.data.cart))
      })
      .catch(err => console.error('Cannot complete order', err))
  }

  handlePaymentSubmit(evt) {
    evt.preventDefault()
    this.props.addNewSPInfo(this.state)
    console.log('Here is the state', this.state)
    this.setState({
      paymentName: '',
      ccNumber: 0,
      ccType: '',
      cvc: 0,
      expiry: '',
      shippingName: '',
      street: '',
      city: '',
      zip: '',
      state: ''
    })
    console.log('Now the state is ', this.state)
  }

  render() {
    return (
      <ShippingPaymentForm
        cart={this.props.cart}
        inputPaymentName={this.state.paymentName}
        inputccNumber={this.state.ccNumber}
        inputccType={this.state.ccType}
        inputcvc={this.state.cvc}
        inputExpiry={this.state.expiry}
        inputShippingName={this.state.shippingName}
        inputStreet={this.state.street}
        inputCity={this.state.city}
        inputZip={this.state.zip}
        inputState={this.state.state}
        handleChange={this.handleChange}
        handlePaymentSubmit={this.handlePaymentSubmit}
        handleShipSubmit={this.handleShipSubmit}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewSPInfo(state) {
      dispatch(addNewSPInfo(state))
    }
  }
}

const mapState = (state) => {
  // console.log('STATE FROM CONTAINER', state)
  return {
    cart: state.cart
  }
}

export default connect(mapState, mapDispatchToProps)(ShippingPaymentFormContainer)
