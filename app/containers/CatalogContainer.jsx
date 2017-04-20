import Catalog from '../components/Catalog'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import axios from 'axios'
window.axios = axios

class CatalogContainer extends Component {
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
      <Catalog products={this.props.products} onSubmit={this.handleSubmit} />
    )
  }
}


const mapStateToProps = (state) => {
  return {
    products: state.products.productsList
  }
}

export default connect(
  mapStateToProps
)(CatalogContainer)
