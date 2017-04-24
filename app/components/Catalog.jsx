import React, { Component } from 'react'
import { Link } from 'react-router'


export default function Catalog(props) {
  const products = props.products

  return (
    <div className="main-container">
      {/* Header */}
      {/* for later -- should reflect selected category */}
      <h3 className="page-header">Catalog</h3>

      {/* Catalog items */ }
      {/* for later -- responsive layout */}
      { products && products.map(product => (
          <div className="catalog-item" key={product.id}>
            <Link to={`catalog/${product.id}`}>
              <img className="catalog-item" src={product.photoUrl} />
              <h4>{product.title}</h4>
              <p>${product.price}.00</p>
              {/* for later -- star rating */}
            </Link>
          </div>
      ))}
    </div>
  )
}

/* PREVIOUS JSX

<div>
  <Link className="thumbnail" to={`catalog/${product.id}`}>
    <img src={product.photoUrl} />
    <div className="caption">
      <h5>{product.title}</h5>
      <small>Price: ${product.price}</small>
    </div>
  </Link>
  <button onClick={props.onSubmit} value={product.id}> Add me to your cart! </button>
</div>

*/
