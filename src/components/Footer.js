import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
    <footer id="footer">			

			{/* bottom footer */}
			<div id="bottom-footer" className="section">
				<div className="container">
					{/* row */}
					<div className="row">
						<div className="col-md-12 text-center">
							<ul className="footer-payments">
								<li><a href="#"><i className="fa fa-cc-visa"></i></a></li>
								<li><a href="#"><i className="fa fa-credit-card"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-paypal"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-mastercard"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-discover"></i></a></li>
								<li><a href="#"><i className="fa fa-cc-amex"></i></a></li>
							</ul>
							<span className="copyright">
								{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
								Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
							{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
							</span>
						</div>
					</div>
						{/* /row */}
				</div>
				{/* /container */}
			</div>
			{/* /bottom footer */}
		</footer>
  )
}

Footer.propTypes = {}

export default Footer
