import React from 'react'
import './Section2.css'
import ReactWOW from 'react-wow'

function Section2() {
    return (
        <div className="Section2">
            <div className="layer">
                <div className="wow slideInLeft S2box">
                    <h1>Pricing</h1>
                    <p>Cut £100</p>
                    <p>Nails £10+</p>
                </div> 
                
                <div className="wow slideInRight S2box">
                    <h1>Pips Salon</h1>
                    <p>Come and get your hair cut and some other stuff</p>
                </div>
            </div>
            
        </div>
    )
}

export default Section2