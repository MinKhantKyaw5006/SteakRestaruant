import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const app = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <div className='h-dvh bg-black'></div>
    </main>
  )
}

export default app