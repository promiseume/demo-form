import React from 'react'
import { FaTruck,FaFighterJet,FaShip,FaUserAlt } from 'react-icons/fa'
import './form.css'
export default function Form() {
    return (
        <div className='form-body'>
           <div className='first-form'>
           <h3>New Booking</h3>
            <p>Fill in the information below to get a quote or create a new booking</p>
           </div>
           <div className='section'>
           <h3>Select a service</h3>
               <div className='freight'>
                   <div className='air'><h3>Air Freight</h3> <span><img src="https://img.icons8.com/material-sharp/24/ffffff/airport.png"/></span></div>
                   <div className='ship'><h3>Sea Freight </h3><span className='spans'><fa><FaShip/></fa></span></div>
                   <div className='truck'><h3>Inland<br/>(Truck & Barge)</h3> <span className='spans'><fa><FaTruck/></fa></span></div>
                   <div className='user'><h3>Custom Clearance </h3><span className='spans'><fa className='usericon'><FaUserAlt/></fa></span></div>
           </div>
           </div>
        </div>
    )
}
