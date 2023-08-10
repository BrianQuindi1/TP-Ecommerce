import React from 'react'

export default function Form() {
    return (
        <div>
            <form>
                <input className="input" type="text" placeholder="Enter Your Name" />
                <input className="input" type="text" placeholder="Enter Your Last Name" />
                <input className="input" type="email" placeholder="Enter Your Email" />
                <input className="input" type="tel" placeholder="Enter Your Phone Number" />
                <input className="input" type="text" placeholder="Enter Your question" />
                <br/>
                <button className="add-to-cart-btn"><i className="fa fa-envelope"></i> Send Request</button>
            </form>
        </div>
    )
}
