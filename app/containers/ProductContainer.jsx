import Product from '../components/Product'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import axios from 'axios'

class ProductContainer extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(evt) {
    console.log('You hit the submit button!')
    evt.preventDefault()
    axios.post(`/api/cart/${evt.target.value}`, { quantity: 1 })
    .catch(err => console.error('Cannot add product to cart', err))
  }

  render() {
    return (
      <Product product={this.props.product} onSubmit={this.handleSubmit} />
    )
  }
}



const mapStateToProps = (state) => {
  return {
    product: state.products.selected
  }
}

export default connect(mapStateToProps)(ProductContainer)
