import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Producto from '../components/Producto'
import { ProductosContext } from '../context/ProductosContext'

function Home(props) {  
  const { productos} = useContext(ProductosContext);
	const { id } = productos || {};  
  
  return (
    <>
  
    {/*<Producto value={id}/>*/}
    
    <div className="section">			
			<div className="container">				
				<div className="row">
          <div id="store" className="col-md-12">            
            {/* store products */}
            <div className="row">
              {/* product */}
              {productos.map((producto=> {
							return(
							<Producto producto={producto} />)}
						))}
            
            

                          
            </div>
            {/* /store products */}            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

Home.propTypes = {}

export default Home;
