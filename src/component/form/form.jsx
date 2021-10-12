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
                   <div className='air'> Air Freight <span><fa ><FaFighterJet/></fa></span></div>
                   <div className='ship'>Sea Freight <span><fa><FaShip/></fa></span></div>
                   <div className='truck'>Inland <br/> (Truck & Barge) <span><fa><FaTruck/></fa></span></div>
                   <div className='user'>Custom Clearance <span><fa><FaUserAlt/></fa></span></div>
           </div>
           </div>
        </div>
    )
}
