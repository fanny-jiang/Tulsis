import Product from '../components/Product'
import React from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    product: state.products.selected
  }
}

export default connect(mapStateToProps)(Product)
