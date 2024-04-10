import React from 'react';
import Image from 'next/image';
import Marquee from '../Marquee/page';

import Ellipse1 from '../../../public/Images/ellipse-1.png'
import Ellipse2 from '../../../public/Images/ellipse-2.png'
import Ellipse3 from '../../../public/Images/ellipse-3.png'
import Ellipse4 from '../../../public/Images/ellipse-4.png'
import Ellipse5 from '../../../public/Images/ellipse-5.png'

import cardsmall from '../../../public/Images/cardsmall.png'


const HeroRightTwo = () => {
  return (
     <div className='hero-right-col'>
        <Marquee/>

        <div className='hero_right_content'>
            <h5>Explore Youre First <br/> Collectible</h5>
            <h2>Meta <br/> Lives </h2>
            <ul className='hero_right_content_list'>
                <li><span>Live in Astrix</span></li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla. </p>
            <div className='people_interested'>
                <div className='people_interested_img'>
                    <Image src={Ellipse1} alt='people_interested_img'/>
                    <Image src={Ellipse2} alt='people_interested_img'/>
                    <Image src={Ellipse3} alt='people_interested_img'/>
                    <Image src={Ellipse4} alt='people_interested_img'/>
                    <Image src={Ellipse5} alt='people_interested_img'/>
                </div>
                <h6>22k people interested</h6>
            </div>
            <p className='class_para'>Collectibles</p>
            <div className='collectibles_img'>
                <Image src={cardsmall} alt='collectibles_img'/>
                <Image src={cardsmall} alt='collectibles_img'/>
                <Image src={cardsmall} alt='collectibles_img'/>
            </div>
            <div className='qr_code_row qr_code_row_two'>
                <button className='join'>Join Waitlist</button>
            </div> 
        </div>
     </div>
  )
}

export default HeroRightTwo