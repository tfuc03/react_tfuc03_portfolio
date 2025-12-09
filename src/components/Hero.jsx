import React from 'react';
import { heroIcons } from '../constant/data';
import Button from "./Button";
import { BackgroundGradient } from "./ui/BackgroundGradient";

// Motion
import { motion } from "motion/react";
import { staggerContainer, fadeIn, fadeInUp } from '../motion/animation';

const Hero = () => {
  return (
   <section className='py-28 lg:pt-40' id='home'>
    <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once:true}}
    className="container flex flex-col items-center">
        {/* img - hero img */}
      <motion.div variants={fadeIn}>
        <BackgroundGradient className="w-52 h-52 lg:w-80 lg:h-80 rounded-full bg-zinc-900"> 
        <figure className='w-52 h-52 lg:w-80 lg:h-80 rounded-full overflow-hidden'>
  <img 
    src="/images/hero-img.jpg" 
    alt="Tfuc03"  
    className="w-full h-full object-cover"
  />
        </figure>
        </BackgroundGradient>
        </motion.div>
        {/* content */}
        <div className='text-center mt-8 '>
            <motion.h1 variants={fadeInUp} className='text-3xl lg:text-5xl mb-1.5 font-bold'>Hi, I'm Pham Nguyen Trong Phuc</motion.h1>
            <motion.h2 variants={fadeInUp}>Frontend Developer</motion.h2>
            <motion.p variants={fadeInUp} className='mac-w-[820px] mx-auto mt-4 mb-6 '>Hello, I’m Phuc, an aspiring Front-End Developer seeking a full-time role. I have a solid understanding of front-end technologies, learn quickly, and adapt well to new challenges. I work effectively in teams, communicate clearly, and manage time and tasks efficiently, eager to contribute and grow with the company.</motion.p>

            <motion.div variants={fadeIn} className='flex items-center justify-center gap-5'>
                {heroIcons.map((item) => (
                    <a key={item.id} href={item.href} target='_blank' rel='noopener noreferrer'
                    
                    className='hover:text-indigo-400 transition-colors'
                    >
                        <item.icon size={30} />
                    </a>
                ))}
            </motion.div>

            {/* button wrapper */}
            <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center flex-wrap gap-5">
              <Button label="Download CV" classes="primary-btn"
              href="./Pham-Nguyen-Trong-Phuc-CV.pdf"
              download="Pham-Nguyen-Trong-Phuc-CV.pdf"
              />
                 <Button label="Let's Collaborate" classes="secondary-btn"/>
            </motion.div>
        </div>
    </motion.div>
   </section>
  )
}

export default Hero
