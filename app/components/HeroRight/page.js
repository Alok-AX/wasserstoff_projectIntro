import React from 'react';
import Image from 'next/image';
import location from '../../../public/Images/location_on.png'
import alarm from '../../../public/Images/alarm.png'
import fream1 from '../../../public/Images/Frame1.png';
import fream2 from '../../../public/Images/Frame2.png'
import fream3 from '../../../public/Images/Frame3.png'

import Qr from '../../../public/Images/Qr_code.png'
import Marquee from '../Marquee/page';



const HeroRight = () => {
  return (
     <div className='hero-right-col'>
        <Marquee/>

        <div className='hero_right_content'>
            <h5>Explore Youre First <br/> Event</h5>
            <h2>Event Name</h2>
            <ul className='hero_right_content_list'>
                <li><Image src={location} alt='fream'/><span>Venue</span></li>
                <li><Image src={alarm} alt='fream'/><span>04/3/2024 @19:00</span></li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </p>

            <h5 className='artist-text'>Artist Lineup</h5>
            <div className='fream_img'>  
                <Image src={fream1} alt='fream'/>
                <Image src={fream2} alt='fream'/>
                <Image src={fream3} alt='fream'/>
            </div>


            <div className='qr_code_row'>
                <Image src={Qr} alt='fream'/>
                <button className='join'>Join Waitlist</button>

            </div>
            

              
        </div>
     </div>
  )
}

export default HeroRight