import React from 'react'

export default function CheckoutProduct({ product }) {
  return (
    <div /* className='productCheckout' */>
      {/* <div>
        <h1>{product.title}</h1>
        <h2 style={{ color: 'rgb(245, 181, 53)' }} >${product.price}</h2>
      </div>
      <img src={product.thumbnail} className="logo" alt="" /> */}

      <div className="card">
  <img src={product.thumbnail}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.price}</p>
  </div>
</div>
    </div>
  )
  }