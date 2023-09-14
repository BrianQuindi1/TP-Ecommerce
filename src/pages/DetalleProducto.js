import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigator from '../components/Navigator'
import axios from 'axios'
import { useParams } from 'react-router-dom'
//import { ProductosContext } from '../context/ProductosContext'


function DetalleProducto(props) {
    
    //const { productos} = useContext(ProductosContext);    
    const {productId} = useParams();
   // const apiUrl = {};
   const [loading, setLoading] = useState(false);

	const [productos, setProductos] = useState([]);
    
    //const {title, price, category, images, thumbnail} = productos || {};
	useEffect(() => {
	const cargarProductos = async () => {

        setLoading(true);
        
		axios
		.get("https://dummyjson.com/products/"+productId)
        .then((result) => {
            const response = result.data
            setProductos(response)
            setLoading(false)
        })
		/*.then(response => {
            setProductos(response.data.products);
        })*/
		.catch((error) => {
			console.log(error);
		});
	}

		cargarProductos();
	}, [productId]);
    return (
        <>
            {/* BREADCRUMB */}
    
            <div id="breadcrumb" className="section">
                {/* container */}
                <div className="container">
                    {/* row */}
                    
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb-tree">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">{productos?.category}</a></li>
                                <li className="active">{productos?.title}</li>
                            </ul>
                        </div>
                        
                    </div> 
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
                        {/* Product main img */}
                        {/*<img id="main-image" alt="product" src={'https://i.dummyjson.com/data/products/' + id + '/1.jpg'} width="250" height="auto" />*/}
                        <div className="col-md-5 col-md-push-2">
                            <div id="product-main-img">
                                <div>
                                    <img id="main-image" alt="product" src={'https://i.dummyjson.com/data/products/' + productId + '/1.jpg'} width="250" height="auto" />
                                </div>
    
                                <div>
                                <img id="main-image" alt="product" src={'https://i.dummyjson.com/data/products/' + productId + '/2.jpg'} width="250" height="auto" />
                                </div>
    
                                <div>
                                <img id="main-image" alt="product" src={'https://i.dummyjson.com/data/products/' + productId + '/3.jpg'} width="250" height="auto" />
                                </div>
    
                                <div>
                                <img id="main-image" alt="product" src={'https://i.dummyjson.com/data/products/' + productId + '/4.jpg'} width="250" height="auto" />
                                </div>
                            </div>
                        </div>
                        {/* /Product main img */}
    
                        {/* Product thumb imgs */}
                        <div className="col-md-2  col-md-pull-5">
                            <div id="product-imgs">
                                <div>
                                    <img src="./img/product01.png" alt=""/>
                                </div>
    
                                <div>
                                    <img src="./img/product03.png" alt=""/>
                                </div>
    
                                <div>
                                    <img src="./img/product06.png" alt=""/>
                                </div>
    
                                <div>
                                    <img src="./img/product08.png" alt=""/>
                                </div>
                            </div>
                        </div>
                        {/* /Product thumb imgs */}
    
                        {/* Product details */}
                        <div className="col-md-5">
                        
                            <div className="product-details">
                                <h2 className="product-name">{productos?.title}</h2>
                                <div>
                                    <div className="product-rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                    </div>
                                    <a className="review-link" href="#">10 Review(s) | Add your review</a>
                                </div>
                                <div>
                                    <h3 className="product-price">{productos?.price - productos?.discountPercentage} <del className="product-old-price">{productos?.price}</del></h3>
                                    <span className="product-available">In Stock</span>
                                </div>
                                <p>{productos?.description}</p>
    
                                <div className="add-to-cart">
                                    
                                    <button className="add-to-cart-btn"><i className="fa fa-shopping-cart"></i> add to cart</button>
                                </div>
    
                                <ul className="product-btns">
                                    <li><a href="#"><i className="fa fa-heart-o"></i> add to wishlist</a></li>
                                    <li><a href="#"><i className="fa fa-exchange"></i> add to compare</a></li>
                                </ul>
    
                                <ul className="product-links">
                                    <li>Category:</li>
                                    <li><a href="#">{productos?.category}</a></li>
                                </ul>

                            </div>
                            
                        </div> 
                        
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
    
            {/* jQuery Plugins */}
    
           
    
        </>
    
  )
}

DetalleProducto.propTypes = { }

export default DetalleProducto

