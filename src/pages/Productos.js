import React, { useContext, useEffect, useState } from 'react'
/*import PropTypes from 'prop-types'
import Header from '../components/Header'
import Navigator from '../components/Navigator'
import Footer from '../components/Footer'*/
import { Link } from 'react-router-dom'
import FilterOption from '../components/FilterOption';
import axios from 'axios';
import { ProductosContext } from '../context/ProductosContext'
import Producto from '../components/Producto';
import { CategoriasContext } from '../context/CategoriasContext';


function Productos(props) {
	const {productos} = useContext(ProductosContext)	
	const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
	const {categorias} = useContext(CategoriasContext)
	const [filter, setFilter] = useState([]);


	useEffect(() => {
        setLoading(true)

        if (productos !== null || productos !== undefined) {
            setLoading(false);
            setData(productos);
            setFilter(productos);
        }

    }, [productos])

	const filterProduct = (category) => {
        const updatedList = data.filter((product) => product.category === category);
        setFilter(updatedList);
    }

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
							
							<FilterOption onClickFunction={() => setFilter(data)} text="All" />
                            {categorias.map((categoria, index) => {
                                return (
                                    <>
                                		<FilterOption onClickFunction={() => filterProduct(categoria)} text={categoria} key={index} />
                                    </>
								)
                            })}															
							</div>
						</div>
						{/* /aside Widget */}
					</div>
					{/* /ASIDE */}

					{/* STORE */}					
					<div className="row">			
						{filter.map((producto=> {
							return(
							<Producto producto={producto} />)}
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
