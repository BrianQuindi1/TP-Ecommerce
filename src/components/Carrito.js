import React from "react";
import { Link } from "react-router-dom";

function Carrito() {
  return (
    <div className="dropdown">
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        aria-expanded="true"
      >
        <i className="fa fa-shopping-cart"></i>
        <span>Your Cart</span>
        <div className="qty">0 </div>
      </a>
      {/* <div className="cart-dropdown">
										<div className="cart-list">
											<div className="product-widget">
												<div className="product-img">
													<img src="./img/product01.png" alt="" />
												</div>
												<div className="product-body">
													<h3 className="product-name"><a href="#">product name goes here</a></h3>
													<h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
												</div> 
												<button className="delete"><i className="fa fa-close"></i></button>
											</div>

											<div className="product-widget">
												<div className="product-img">
													<img src="./img/product02.png" alt="" />
												</div>
												<div className="product-body">
													<h3 className="product-name"><a href="#">product name goes here</a></h3>
													<h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
												</div>
												<button className="delete"><i className="fa fa-close"></i></button>
											</div>
										</div>
										<div className="cart-summary">
											<small>3 Item(s) selected</small>
											<h5>SUBTOTAL: $2940.00</h5>
										</div>
										<div className="cart-btns">
											<a href="#">View Cart</a>
											<a href="#">Checkout  <i className="fa fa-arrow-circle-right"></i></a>
										</div>
									</div> */}
    </div>
  );
}

export default Carrito;
