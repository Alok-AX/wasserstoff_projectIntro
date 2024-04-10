 'use client'
import React, { useRef } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import slider5 from '../../../../public/Images/slider-5.png'
import slider6 from '../../../../public/Images/slider-6.png'
import slider2 from '../../../../public/Images/slider-2.png'
import slider4 from '../../../../public/Images/slider-4.png'
import location from '../../../../public/Images/location_on.png'
const SliderContainer = () => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    var settings = {
        dots: false,
        infinite: false,
        arrows:false,
        speed: 500,
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
        autoplay:true,
        centerPadding: "50px",
        responsive: [
            {
            breakpoint: 991,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
                }
            },
            {
            breakpoint: 575,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
                }
            },
        ]
    };
  return (
   <div className='silk_slider_main_col'>
      <Slider
      ref={slider => {
          sliderRef = slider;
        }}
       {...settings}>
         <div className='slider_main'>
            <div className='slider_box'>
                <Image src={slider5} alt='slider5' className='slider_img'/>
                <div className='slider_box_content'>
                    <h3>Event Name</h3>
                    <p><Image src={location} alt='location'/>Location</p>
                </div>
            </div>
         </div>
         <div className='slider_main'>
            <div className='slider_box'>
                <Image src={slider6} alt='slider6' className='slider_img'/>
                <div className='slider_box_content'>
                    <h3>Event Name</h3>
                    <p><Image src={location} alt='location'/>Location</p>
                </div>
            </div>
         </div>
         <div className='slider_main'>
            <div className='slider_box'>
                <Image src={slider2} alt='slider2' className='slider_img'/>
                <div className='slider_box_content'>
                    <h3>Event Name</h3>
                    <p><Image src={location} alt='location'/>Location</p>
                </div>
            </div>
         </div>
         <div className='slider_main'>
            <div className='slider_box'>
                <Image src={slider4} alt='slider4' className='slider_img'/>
                <div className='slider_box_content'>
                    <h3>Event Name</h3>
                    <p><Image src={location} alt='location'/>Location</p>
                </div>
            </div>
         </div>
         <div className='slider_main'>
            <div className='slider_box'>
                <Image src={slider5} alt='slider5' className='slider_img'/>
                <div className='slider_box_content'>
                    <h3>Event Name</h3>
                    <p><Image src={location} alt='location'/>Location</p>
                </div>
            </div>
         </div>
         <div className='slider_main'>
            <div className='slider_box'>
                <Image src={slider5} alt='slider5' className='slider_img'/>
                <div className='slider_box_content'>
                    <h3>Event Name</h3>
                    <p><Image src={location} alt='location'/>Location</p>
                </div>
            </div>
         </div>
    </Slider>

        <div className='arrow-btn-slider'>
            <button className="button" onClick={previous}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256 366.3 387.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z"/></svg> 
                       </button>
        <button className="button" onClick={next}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4C1.9 395.3-4.5 414.5 3.4 430.3s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z"/></svg>
            </button>
      </div>
   </div>
  )
}

export default SliderContainer;