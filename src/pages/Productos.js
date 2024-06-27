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
import NewsLetter from '../components/NewsLetter';


function Productos(props) {
	const {productos} = useContext(ProductosContext)	
	const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
	const {categorias} = useContext(CategoriasContext)
	const [filter, setFilter] = useState([]);


	useEffect(() => {
        setLoading(true)

        if (productos != null || productos != undefined) {
            setLoading(false);
            setData(productos);
            setFilter(productos);
        }

    }, [productos])

	const filterProduct = (category) => {
        const updatedList = data.filter((product) => product.category == category);
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
                            {categorias.map((category) => {
                                return (
                                    <>
                                		<FilterOption onClickFunction={() => filterProduct(category)} text={category.name} />
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
		<NewsLetter/>
		{/* /NEWSLETTER */}

	</>


  )
}

Productos.propTypes = {}

export default Productos
