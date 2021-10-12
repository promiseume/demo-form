import React from 'react'
import { FaMapMarkerAlt,FaCalendar } from 'react-icons/fa'
import './input.css'
export default function Input() {
    return (
        <div className='form-input'>
        <div className='first-forminput'>
        <div style={{flexGrow: "3"}} ><input type='text' placeholder='Import'></input></div>
        <div style={{flexGrow: "10"}}><FaMapMarkerAlt/><input  type='text' placeholder=' From city or port'></input></div>
        <div style={{flexGrow: "10"}}><FaMapMarkerAlt/><input  type='text' placeholder='To City or port'></input></div> 
            </div>
            <div className='sec-forminput'>
            <div><span><FaCalendar/></span><input type='text' placeholder='Ready Date'></input></div>
            <select className='select'>
                <option disabled selected>Incoterms</option>
                <option>cargo</option>
            </select>
            <input  type='text' placeholder='Total Cargo Value'></input>
            </div>
            </div>
    )
}
