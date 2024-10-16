import React from 'react'
import '../styles/cards.css'
import bridge from '../images/bridgecollapse.jpg'
import phailin from '../images/phailin.jpg'
import rain from '../images/heavyrain.jpg'

function Cards() {
  return (
    <div className='card-container'>
        <div className='card'>
            <img src={bridge} alt="" />
            <div class="container">
                <h3><b>BRIDGE COLLAPSES</b></h3> 
                <p>A 50-metre section of the Howrah Bridge in Kolkata has broken away and is travelling downstream on the Hooghly River.</p> 
                <button className='button1'>Read More</button>
            </div>
        </div>

        <div className='card'>
            <img src={phailin} alt="" />
            <div class="container">
                <h3><b>PHAILIN RELIEF</b></h3> 
                <p>Local NGOs and community groups in Delhi have organized a relief effort, sending over 5 Crores of aid to victims of the recent floods in Uttarakhand.</p> 
                <button className='button1'>Read More</button>
            </div>
        </div>

        <div className='card'>
            <img src={rain} alt="" />
            <div class="container">
                <h3><b>HEAVY RAIN</b></h3> 
                <p>Due to heavy storms and floods in India, Chennai is experiencing one of the deadliest floods ever, causing the entire city to be submerged.</p> 
                <button className='button1'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Cards