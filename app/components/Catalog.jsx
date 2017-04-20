import React, { Component } from 'react'
import { Link } from 'react-router'


export default function Catalog(props) {
  const products = props.products
  return (
    <div>
      <h3> CATALOG!!! </h3>
      <div>
        {
          products && products.map(product => (
            <div className="col-xs-4" key={product.id}>
              <Link className="thumbnail" to={`catalog/:productId/${product.id}`}>
                <img src={product.photoUrl} />
                <div className="caption">
                  <h5>
                    <span>{product.title}</span>
                  </h5>
                  <small>{product.price}</small>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}
