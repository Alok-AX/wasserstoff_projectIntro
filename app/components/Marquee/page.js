import React from 'react'
import star from '../../../public/Images/star.png';
import Image from 'next/image';

const Marquee = () => {
  return (
    <div className='marquee_content'>
        <marquee>
            <div >
            <h5>Event : Oasis Bus tour , JLN Stadium , Delhi </h5>
            <Image src={star} alt='fream'/>
            <h5>Collection Live : Meta Lives , live on astrix</h5>
            </div>
            <div>
            <h5>Event : Oasis Bus tour , JLN Stadium , Delhi </h5>
            <Image src={star} alt='fream'/>
            <h5>Collection Live : Meta Lives , live on astrix</h5>
            </div>
            <div>
            <h5>Event : Oasis Bus tour , JLN Stadium , Delhi </h5>
            <Image src={star} alt='fream'/>
            <h5>Collection Live : Meta Lives , live on astrix</h5>
            </div>
            <div>
            <h5>Event : Oasis Bus tour , JLN Stadium , Delhi </h5>
            <Image src={star} alt='fream'/>
            <h5>Collection Live : Meta Lives , live on astrix</h5>
            </div>
            <div>
            <h5>Event : Oasis Bus tour , JLN Stadium , Delhi </h5>
            <Image src={star} alt='fream'/>
            <h5>Collection Live : Meta Lives , live on astrix</h5>
            </div>
           
        </marquee>
    </div>

  )
}

export default Marquee