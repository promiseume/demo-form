import React from "react";
import "./lastform.css";
export default function Lastform() {
  return (
    <div className='last-form'>
      <h3>Additional Services</h3> 
      
      <div className='container'>
          <div className='container-child'>
        <div className='form-child'>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              </div>
              <div className='new-container'>
              <h4> 
           Export Forwarding</h4>
          <p>we handle customs clearance and documentation</p>
          </div>
          </div>
        
           <div className='container-child'>
            <div className='form-child'>
                <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              </div>
              <div className='new-container'>
         <h4> Import Customs Clearance</h4>
         <p>We handle import customs and regulatory requirements</p>
         </div>
         </div>

         </div>
   

       <div className='container'>
           <div className='container-child'>
            <div className='form-child'>
                <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label></div>
              <div className='new-container'>
         <h4>Cargo  Insurance </h4>
         <p>Protect your cargo from logistics risks up to its full<br/> value</p>
         </div>
         </div>

         <div className='container-child'>
            <div className='form-child'>
                <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label></div>
              <div id='new-container' className='new-container'>
         <h4> Transport / Delivery</h4>
         <p>We help deliver the cargo to  your doorstep from the port</p>
         </div>
        </div>

        </div>
    </div>
  );
}
