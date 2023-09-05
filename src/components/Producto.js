import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import { ProductosContext } from '../context/ProductosContext';
import DetalleProducto from '../pages/DetalleProducto';
import { Link } from 'react-router-dom';


function Producto() {    
    const { productos} = useContext(ProductosContext);
	const {title, price, category, images} = productos || {};

  return (
    <div className="col-md-4 col-xs-6">
              <Link to="/detalleProducto">
								<div className="product">
									<div className="product-img">
										<img src={images} alt=""/>
										<div className="product-label">
											<span className="new">NEW</span>
										</div>
									</div>
									<div className="product-body">
										<p className="product-category">{category}</p>
										<h3 className="product-name"><Link to="/detalleProducto">{title}</Link></h3>
										<h4 className="product-price">{price}<del className="product-old-price"></del></h4>
										<div className="product-rating">
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<div className="product-btns">
											<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
											<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
											<button className="quick-view"><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
										</div>
									</div>
									<div className="add-to-cart">
										<button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
									</div>
								</div>
                </Link>
							</div>
  )
}


export default Producto

