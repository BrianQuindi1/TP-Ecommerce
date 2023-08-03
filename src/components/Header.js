import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
  return (
    <header>
			{/* TOP HEADER */}
			<div id="top-header">
				<div className="container">
					<ul className="header-links pull-left">
						<li><a href="#"><i className="fa fa-phone"></i> +021-95-51-84</a></li>
						<li><a href="#"><i className="fa fa-envelope-o"></i> email@email.com</a></li>
						<li><a href="#"><i className="fa fa-map-marker"></i> 1734 Stonecoal Road</a></li>
					</ul>
					<ul className="header-links pull-right">
						<li><a href="#"><i className="fa fa-dollar"></i> USD</a></li>
						<li><a href="#"><i className="fa fa-user-o"></i> My Account</a></li>
					</ul>
				</div>
			</div>
			{/* /TOP HEADER */}

			{/* MAIN HEADER */}
			<div id="header">
				{/* container */}
				<div className="container">
					{/* row */}
					<div className="row">
						{/* LOGO */}
						<div className="col-md-9">
							<div className="header-logo">
								<a href="#" className="logo">
									<img src="./img/logo.png" alt="" />
								</a>
							</div>
						</div>
						{/* /LOGO */} 						

						{/* ACCOUNT */}
						<div className="col-md-3 clearfix">
							<div className="header-ctn">								

								{/* Cart */}
								<div className="dropdown">
									<a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
										<i className="fa fa-shopping-cart"></i>
										<span>Your Cart</span>
										<div className="qty">3</div>
									</a>
									<div className="cart-dropdown">
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
									</div>
								</div>
								{/* /Cart */}

								{/* Menu Toogle */}
								<div className="menu-toggle">
									<a href="#">
										<i className="fa fa-bars"></i>
										<span>Menu</span>
									</a>
								</div>
								{/* /Menu Toogle */}
							</div>
						</div>
						{/* /ACCOUNT */}
					</div>
					{/* row */}
				</div>
				{/* container */}
			</div>
			{/* /MAIN HEADER */}
		</header>
  )
}

Header.propTypes = {}

export default Header
