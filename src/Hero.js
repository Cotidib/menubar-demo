import React from 'react'
import phoneImg from './images/phone.svg'
// import {useGlobalContext} from './context'

const Hero = () => {
  // const {closeSubmenu} = useGlobalContext();

  return <section className='hero-container'>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1>The Product landing page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare ullamcorper tellus, non lobortis tellus imperdiet non. Nam enim augue, ultrices a nisl et, placerat facilisis arcu. Morbi in iaculis dolor. Quisque aliquam commodo iaculis. </p>
        <button className='action-btn'>Start now</button>
      </article>
      <article><img className='hero-img' src={phoneImg} alt='phone'/></article>
    </div>
  </section>
}

export default Hero