import React from 'react'
import '../App.css'
import giff from '../images/Hd/tractorgifffff.gif'
import subcid from '../images/Hd/subsidy.gif'
import fifty from '../images/Hd/giff.gif'

function Discount() {
    return (
        <div className='container' style={{marginTop:'20px'}}>
            <div className="row">
                <div className="col-md-12 ">
                    <img src={giff} style={{width:'100%',objectFit:'fill'}} alt="" />
                </div>
                <h3 style={{color:'red'}}>OFFER PRICE:50% Subsidy from our company..!</h3>
                <div className="col-md-12 ">
                    <img src={subcid} style={{width:'100%',objectFit:'fill'}} alt="" />
                </div>
                {/* <div className="col-md-6  ">
                <img src={subcid}  alt="" />
                </div> */}
            </div>
        </div>
    )
}

export default Discount