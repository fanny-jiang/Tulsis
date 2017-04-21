import {
  RECEIVE_SPINFO
} from '../constants'
import axios from 'axios'

export const addNewSPInfo = state =>
  axios.put(`/api/orders/${state.orderId}/buy`, {
    payment: {
      paymentName: state.paymentName,
      ccnumber: state.ccnumber,
      cctype: state.cctype,
      cvc: state.cvc,
      expiry: state.expiry
    },
    address: {
      shippingName: state.shippingName,
      street: state.street,
      city: state.city,
      zip: state.zip,
      state: state.state,
    }
  }).catch(console.error)
