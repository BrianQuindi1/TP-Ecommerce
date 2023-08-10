import React from 'react'
import PropTypes from 'prop-types'
import { Link, Outlet,NavLink } from 'react-router-dom'


function Navigator(props) {
  return (
    <nav id="navigation">
			{/* container */}
			<div className="container">
				{/* responsive-nav */}
				<div id="responsive-nav">
					{/* NAV */}
				<ul className="main-nav nav navbar-nav">
					<li><NavLink to="/" >Home</NavLink></li>
					<li><NavLink to="/productos">Productos</NavLink></li>
					<li><NavLink to="/contacto">Contacto</NavLink></li>
					<Outlet />
				</ul>
				
					{/*<ul className="main-nav nav navbar-nav">
						<li className="active"><a href="#">Home</a></li>
						<li><a href="#">Productos</a></li>
						<li><a href="#">Contacto</a></li>
 					 </ul>*/}
					{/* /NAV */}
				</div>
				{/* /responsive-nav */}
			</div>
			{/* /container */}
		</nav>
  )
}

Navigator.propTypes = {}

export default Navigator
