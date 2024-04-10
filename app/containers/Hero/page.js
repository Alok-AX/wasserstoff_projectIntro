import BigText from '@/app/components/HeroLeft/BigText'
import { HeroLeft } from '@/app/components/HeroLeft/page'
import HeroRight from '@/app/components/HeroRight/page'
import React from 'react'

const Hero = () => {
  return (
    <section className='banner_section'>
      <div className="hero_main_row">
        <div className="hero_left_bg_text">
            <BigText/>
          </div>
          <HeroLeft/>
          <HeroRight/>
      </div>

  </section>
  )
}

export default Hero