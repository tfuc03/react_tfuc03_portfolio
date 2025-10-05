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
            <motion.p variants={fadeInUp} className='mt-3 mb-9'>Motivated Front-End Developer with hands-on experience in React.js, Next.js, JavaScript (ES6+), and responsive web design. Possess a solid foundation in OOP, Java, and C#, along with knowledge of data analysis that enhances problem-solving skills. Proficient in using Git/GitHub, modern build tools, and basic Docker workflows. A fast learner, effective team player, and always eager to contribute to building user-friendly and efficient web applications in a professional environment.</motion.p>
        
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
