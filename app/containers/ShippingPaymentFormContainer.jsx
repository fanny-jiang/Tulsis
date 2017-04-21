import { connect } from 'react-redux'
import ShippingPaymentForm from '../components/ShippingPaymentForm'
import React, {Component} from 'react'
import { addNewSPInfo } from '../action-creators/shippingPayment'

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
    this.setState({
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
    })
  }

  render() {
    return (
      <ShippingPaymentForm
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
