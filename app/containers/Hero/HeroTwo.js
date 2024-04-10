import BigTextTwo from '@/app/components/HeroLeftTwo/BigTextTwo'
import React from 'react'
import { HeroLeftTwo } from '@/app/components/HeroLeftTwo/page'
import HeroRightTwo from '@/app/components/HeroRightTwo/page'

const HeroTwo = () => {
  return (
    <section className='banner_section'>
    <div className="hero_main_row">
      <div className="hero_left_bg_text">
          <BigTextTwo/>
        </div>
        <HeroLeftTwo/>
        <HeroRightTwo/>
    </div>

</section>
  )
}

export default HeroTwo