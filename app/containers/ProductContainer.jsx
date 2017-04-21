import Product from '../components/Product'
import { connect } from 'react-redux'
import React, { Component } from 'react'
import axios from 'axios'
window.axios = axios

class ProductContainer extends Component {
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
            <Product products={this.props.products} onSubmit={this.handleSubmit} />
        )
    }
}

const mapStateToProps = (state) => {
    console.log('product container state ', state)
    return {
        product: state.products
    }
}

export default connect(mapStateToProps)(Product)
