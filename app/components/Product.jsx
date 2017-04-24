import React, { Component } from 'react'
import { Link } from 'react-router'
import axios from 'axios'

export default function Product(props) {
  console.log('PROPS: ', props)

  const product = props.selected || [] // product component may render before props have been received
  
  return (
    <div className="main-container">

      {/* 'Back to Catalog' link goes here */}

      {/* Product Detail */}
      <div className="product-detail">
          <img src={product.photoUrl} />
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <span className="price">
              <p>${product.price}.00</p>
          </span>
      </div>

      {/* Add to cart button */}
      <button onClick={props.onSubmit} value={product.id}> Add me to your cart! </button>

      {/* Reviews go here */}

    </div>
  )

}
