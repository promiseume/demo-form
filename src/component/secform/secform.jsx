import React from "react";
import "./secfrom.css";
export default function Secform() {
  return (
      <div className='third-section'>
       <section className='cargo-header'>
           <div><h3>Cargo Details</h3></div>
           <div className='togg-form'>
               <div className='togglerform'>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
              </div>
              <div className='chemicals'>
            <h4> Dangerous Cargo (ex. Chemicals,Battery)</h4>
            </div>
            </div>
       </section>

      <div className='cargo-section'>
        <input type='number' placeholder="Total Dimension"></input>
        <input type='number' style={{backgroundColor:'#bfc5c7',borderLeft:'none'}} placeholder="Package Details"></input>
      </div>
      <div className='sec-cargosection'>
          <div>
      <label for="volume">Total Volume</label>
    <input type="number" id="volume" name="number" placeholder="cbm"/>
    </div>
    <div className='weight-class'>
    <label for="weight">Total Weight</label>
    <input type="number" id="weight" name="weight" placeholder="kg"/>
    </div>
      </div>
    </div>
   
  );
}
