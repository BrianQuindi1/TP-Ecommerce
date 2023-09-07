import React, { useEffect, useState } from 'react'
/*import PropTypes from 'prop-types'
import Header from '../components/Header'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'*/
import { Link } from 'react-router-dom'
import axios from 'axios';
import { ProductosContext } from '../context/ProductosContext'

function Productos(props) {
	
	const apiUrl = 'https://dummyjson.com/products';

	const [productos, setProductos] = useState([]);
	let cargarProductos = () => {
		axios
		.get(apiUrl)
		.then(response => {
            setProductos(response.data.products);
        })
		.catch((error) => {
			console.log(error);
		});
	}
	useEffect(() => {
		cargarProductos();
	}, []);

	return (
    <>	    

    {/*<Header />

		<Navigator/>
    */}
		{/* BREADCRUMB */}
		<div id="breadcrumb" className="section">
			{/* container */}
			<div className="container">
				{/* row */}
				{/*<div className="row">
					<div className="col-md-12">
						<ul className="breadcrumb-tree">
							<li><a href="#">Home</a></li>
							<li><a href="#">All Categories</a></li>
							<li><a href="#">Accessories</a></li>
							<li className="active">Headphones (227,490 Results)</li>
						</ul>
					</div>
</div>*/}
				{/* /row */}
			</div>
			{/* /container */}
		</div>
		{/* /BREADCRUMB */}

		{/* SECTION */}
		<div className="section">
			{/* container */}
			<div className="container">
				{/* row */}
				<div className="row">
					{/* ASIDE */}
					<div id="aside" className="col-md-3">
						{/* aside Widget */}
						<div className="aside">
							<h3 className="aside-title">Categories</h3>
							<div className="checkbox-filter">

								<div className="input-checkbox">
									<input type="checkbox" id="category-1"/>
									<label for="category-1">
										<span></span>
										Laptops
										<small>(120)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-2"/>
									<label for="category-2">
										<span></span>
										Smartphones
										<small>(740)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-3"/>
									<label for="category-3">
										<span></span>
										Cameras
										<small>(1450)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-4"/>
									<label for="category-4">
										<span></span>
										Accessories
										<small>(578)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-5"/>
									<label for="category-5">
										<span></span>
										Laptops
										<small>(120)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-6"/>
									<label for="category-6">
										<span></span>
										Smartphones
										<small>(740)</small>
									</label>
								</div>
							</div>
						</div>
						{/* /aside Widget */}

						{/* aside Widget */}
						<div className="aside">
							<h3 className="aside-title">Price</h3>
							<div className="price-filter">
								<div id="price-slider"></div>
								<div className="input-number price-min">
									<input id="price-min" type="number"/>
									<span className="qty-up">+</span>
									<span className="qty-down">-</span>
								</div>
								<span>-</span>
								<div className="input-number price-max">
									<input id="price-max" type="number"/>
									<span className="qty-up">+</span>
									<span className="qty-down">-</span>
								</div>
							</div>
						</div>
						{/* /aside Widget */}

						{/* aside Widget */}
						<div className="aside">
							<h3 className="aside-title">Brand</h3>
							<div className="checkbox-filter">
								<div className="input-checkbox">
									<input type="checkbox" id="brand-1"/>
									<label for="brand-1">
										<span></span>
										SAMSUNG
										<small>(578)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-2"/>
									<label for="brand-2">
										<span></span>
										LG
										<small>(125)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-3"/>
									<label for="brand-3">
										<span></span>
										SONY
										<small>(755)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-4"/>
									<label for="brand-4">
										<span></span>
										SAMSUNG
										<small>(578)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-5"/>
									<label for="brand-5">
										<span></span>
										LG
										<small>(125)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-6"/>
									<label for="brand-6">
										<span></span>
										SONY
										<small>(755)</small>
									</label>
								</div>
							</div>
						</div>
						{/* /aside Widget */}

						{/* aside Widget */}
						<div className="aside">
							<h3 className="aside-title">Top selling</h3>
							<div className="product-widget">
								<div className="product-img">
									<img src="./img/product01.png" alt=""/>
								</div>
								<div className="product-body" >
									<p className="product-category">Category</p>
									<h3 className="product-name"><Link to="/detalleProducto">product name goes here</Link></h3>
									<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
								</div>
							</div>

							<div className="product-widget">
								<div className="product-img">
									<img src="./img/product02.png" alt=""/>
								</div>
								<div className="product-body">
									<p className="product-category">Category</p>
									<h3 className="product-name"><Link to="/detalleProducto">product name goes here</Link></h3>
									<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
								</div>
							</div>

							<div className="product-widget">
								<div className="product-img">
									<img src="./img/product03.png" alt=""/>
								</div>
								<div className="product-body">
									<p className="product-category">Category</p>
									<h3 className="product-name"><Link to="/detalleProducto">product name goes here</Link></h3>
									<h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
								</div>
							</div>
						</div>
						{/* /aside Widget */}
					</div>
					{/* /ASIDE */}

					{/* STORE */}
		{/* ACA ESTAN TODOS LOS PRODUCTOS (REEMPLAZAR X UN MAP/FOREACH)*/}
		<div className="row">
		
			
					{productos.map(producto=> (
						<div className="col-md-4 col-xs-6">
						<Link to="/detalleProducto">
						<div className="product" key={producto.id}>
							<div className="product-img">
								<img src={producto.thumbnail} alt=""/>
								<div className="product-label">
									<span className="sale">-30%</span>
									<span className="new">NEW</span>
								</div>
							</div>
							<div className="product-body">
								<p className="product-category">{producto.category}</p>
								<h3 className="product-name"><Link to="/detalleProducto">{producto.title}</Link></h3>
								<h4 className="product-price">$980.00 <del className="product-old-price">{producto.price}</del></h4>
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
					))}
					</div>
					
					{/* /STORE */}
				</div>
				{/* /row */}
			</div>
			{/* /container */}
		</div>
		{/* /SECTION */}

		{/* NEWSLETTER */}
		<div id="newsletter" className="section">
			{/* container */}
			<div className="container">
				{/* row */}
				<div className="row">
					<div className="col-md-12">
						<div className="newsletter">
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form>
								<input className="input" type="email" placeholder="Enter Your Email"/>
								<button className="newsletter-btn"><i className="fa fa-envelope"></i> Subscribe</button>
							</form>
							<ul className="newsletter-follow">
								<li>
									<a href="#"><i className="fa fa-facebook"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-twitter"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-instagram"></i></a>
								</li>
								<li>
									<a href="#"><i className="fa fa-pinterest"></i></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/* /row */}
			</div>
			{/* /container */}
		</div>
		{/* /NEWSLETTER */}

	</>


  )
}

Productos.propTypes = {}

export default Productos
