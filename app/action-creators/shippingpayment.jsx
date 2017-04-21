import {
  RECEIVE_SPINFO
} from '../constants'
import axios from 'axios'

export const addNewSPInfo = state =>
  axios.put(`/api/orders/${state.orderId}/buy`, {
    payment: {
      state.paymentName,
      state.ccnumber,
      state.cctype,
      state.cvc,
      state.expiry
    },
    address: {
      state.shippingName
      state.street
      state.city
      state.zip
      state.state
    }
  }
})
  .catch(console.error)
  })

