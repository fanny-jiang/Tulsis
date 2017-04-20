import Catalog from '../components/Catalog'
import { connect } from 'react-redux'
import React, { Component } from 'react'

import axios from 'axios'
window.axios = axios

class CatalogContainer extends Component {
  // constructor(props) {
  //   super(props)
    // this.handleSubmit = this.handleSubmit.bind(this)
  // }

  // handleSubmit(evt) {
  //   // evt.preventDefault()
  //   this.props.addNewPlaylist(this.state.inputValue)
  // }

  render() {
    return (
      <Catalog products={this.props.products} />
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
