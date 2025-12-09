import { li, section } from 'motion/react-client'
import React from 'react'
import { aboutItems } from '../constant/data'

// Motion
import { motion } from "motion/react";
import { staggerContainer, fadeIn, fadeInUp } from '../motion/animation';

const About = () => {
  return (
    <section className='section bg-secondary-clr' id='about'>
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        className='container'>
            <motion.h2 variants={fadeInUp}>About me</motion.h2>
            <motion.p variants={fadeInUp} className='mt-3 mb-9'>Hi, I'm Phuc. I'm a software engineering student at Huflit. I'm a Frontend Developer. The work revolves around Software Development. In a normal way, I want to turn my ideas into reality. I wanted to challenge myself to see how far I could go in this really harsh environment. I am aiming to become a Fullstack Developer. I am not a good and experienced person. I know that so I will try to keep up with those who are better than me.</motion.p>
        
        {/* Skills */}
        <div>
            <motion.p variants={fadeInUp} className='text-white font-semibold text-xl mb-3'>Skills:</motion.p>
            <motion.ul variants={fadeInUp} className=''>
                {aboutItems.map((item) => (
                    <li key={item.id}>
                        <p>✓ {item.label}</p>
                    </li>
                ))}
            </motion.ul>
        </div>

        </motion.div>
    </section>
  )
}

export default About
