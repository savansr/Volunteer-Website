import React from 'react'
import {Link} from 'react-router-dom';

const Hero = () => {
  return (
    <section className='hero'>
    <div className='banner'>
     <h1>Volunteers</h1>
     <h3>Needed</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eaque neque fuga numquam distinctio maxime qui dolores magnam.
        Optio autem quibusdam eaque libero nam tempore.</p>
        <Link to='/donate' className='btn'>Donate Now</Link>
    </div>
    <div className='banner'>
       <img src='/hero.png' alt='hero'></img>
    </div>

 </section>
  )
}

export default Hero;
