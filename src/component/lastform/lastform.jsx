import React from "react";
import "./lastform.css";
export default function Lastform() {
  return (
    <div className='last-form'>
      <h3>Additional Services</h3>
      <div className="form-section">
        <div className='toggle-form'>
        <div className='form-child'>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              </div>
              <div>
              <h4> 
           Export Forwarding</h4>
          <p>we handle customs clearance and documentation</p>
          </div>
        </div>
        
        <div className='toggle-form'>
            <div className='form-child'><label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label></div>
              <div>
         <h4> Import Customs Clearance</h4>
         <p>We handle import customs and regulatory requirements</p>
         </div>
        </div>

        <div className='toggle-form'>
            <div className='form-child'><label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label></div>
              <div>
         <h4>Cargo  Insurance </h4>
         <p>Protect your cargo from logistics risks up to its <br/> full value</p>
         </div>
        </div>


        <div className='toggle-form'>
        <div className='form-child'>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              </div>
              <div>
            <h4>
            Transport/Delivery
          </h4>
          <p>we deliver the cargo to your door step from the port</p>
        </div>
        </div>
      </div>
    </div>
  );
}
