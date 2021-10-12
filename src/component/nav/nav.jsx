import React from 'react'
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa'
import './nav.css'
export default function Nav() {
    return (
        <>
        <input type='checkbox' id='check'/>
        <nav>
            <div className='icon'>Send <span> FREIGHT</span></div>
            <div className='search_box'>
          <input type='text' placeholder='Search'></input>
                    <span><FaSearch/></span>
                </div>
                 <ol>
                     <li className='request'><a href='#'>Request Quote</a></li>
                     <li className='shipment'><a href='#'>Book Shipment</a></li>
                 </ol>
                 <label for='check' className='bar'>
                     <span id='bars'><FaBars/> </span>
                     <span id='times'><FaTimes/> </span>
                 </label>
                 </nav>
                 <section></section>
</>
    )
}
