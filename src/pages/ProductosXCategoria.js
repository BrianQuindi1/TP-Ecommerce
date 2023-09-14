import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ProductosContext } from '../context/ProductosContext'
import { CategoriasContext } from '../context/CategoriasContext'
import { useParams } from 'react-router-dom'
import Producto from '../components/Producto'


function ProductosXCategoria(props) {
    const {productos} = useContext(ProductosContext)	
	const {categorias} = useContext(CategoriasContext)
    
    const {productCategory} = useParams()

    const nuevaLista = productos.filter((product) => product.category === productCategory);


    //console.log(productCategory);
      return (
    <>
    <h1>{categorias[productCategory-1]}</h1>
    {nuevaLista.map(producto=> (
        <Producto value={producto} /> {/* ver bien como traer las cards */}
    ))}
    </>
  )
}

ProductosXCategoria.propTypes = {}

export default ProductosXCategoria
