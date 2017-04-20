import React, { Component } from 'react'
import { Link } from 'react-router'


export default function Catalog(props) {
  const products = props.products
  console.log('props', props)
  return (
    <div>
      <h3> Check out what Tulsi's has for your baby's tootsies! </h3>
      <div>
      
        {
          products && products.map(product => (
            <div className="col-xs-4" key={product.id}>
              <Link className="thumbnail" to={`catalog/${product.id}`}>
                <img src={product.photoUrl} />
                <div className="caption">
                  <h5>
                    <span>{product.title}</span>
                  </h5>
                  <small>Price: ${product.price}</small>
                </div>
              </Link>
              <button onClick={props.onSubmit} value={product.id}> Add me to your cart! </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}
