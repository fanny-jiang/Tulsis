import Cart from '../components/Cart'
import { connect } from 'react-redux'
import React, { Component } from 'react'

class CartContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
    axios.post(`/api/cart/${evt.target.value}`, { quantity: 1 })
    .catch(err => console.error('Cannot add product to cart', err))
  }

  render() {
    return (
      <Catalog products={this.props.products} onSubmit={this.handleSubmit} />
    )
  }
}




const mapStateToProps = (state) => {
  console.log('cart container state', state)
  return {
    cart: state.cart.orderItems
  }
}

const CartContainer = connect(mapStateToProps)(Cart)

export default CartContainer
