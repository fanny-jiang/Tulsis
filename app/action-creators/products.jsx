import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../constants'
import axios from 'axios'

export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
})

export const getProductById = productId => {
  return dispatch => {
    console.log("IN GETPRODUCTBYID:", productId)
    axios.get(`/api/products/${productId}`)
      .then(res => {
        console.log("RESPONSE: ", res)
        dispatch(receiveProduct(res.data))
      })
  }
}

export const getProductsByCategory = categoryName => {
  return dispatch => {
    console.log("IN getProductsByCategory:", categoryName)
    axios.get(`/api/products/category/${categoryName}`)
    .then(res => {
      dispatch(receiveProducts(res.data))
    })
  }
}
