import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Carrito from './Carrito'

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
								<Link  to="/" className="logo">
									<img src="./img/logo.png" alt="" />
								</Link>
							</div>
						</div>
						{/* /LOGO */} 						

						{/* ACCOUNT */}
						<div className="col-md-3 clearfix">
							<div className="header-ctn">								

								{/* Cart */}
								<Carrito/>
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
