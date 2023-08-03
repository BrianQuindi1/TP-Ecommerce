import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import Navigator from './Navigator'
import Header from './Header'

function Layout(props) {
  return (
    <>
        <Header />
		<Navigator />

        

        <Footer />
    </>
  )
}

Layout.propTypes = {}

export default Layout
