import { connect } from 'react-redux'
import ShippingPaymentForm from '../components/ShippingPaymentForm'
import React, { Component } from 'react'
import { addNewSPInfo } from '../action-creators/shippingPayment'

class ShippingPaymentFormContainer extends Component {
  constructor(props) {
    super(props)
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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
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
        handleSubmit={this.handleSubmit}
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

export default connect(null, mapDispatchToProps)(ShippingPaymentFormContainer)
