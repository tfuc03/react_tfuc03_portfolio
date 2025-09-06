import { li, section } from 'motion/react-client'
import React from 'react'
import { aboutItems } from '../constant/data'

const About = () => {
  return (
    <section className='section bg-secondary-clr'>
        <div className='container'>
            <h2>About me</h2>
            <p className='mt-3 mb-9'>Motivated Front-End Intern with practical skills in React.js, Next.js, JavaScript (ES6+), and responsive web design. Possess a solid programming foundation in OOP, Java, and C#, along with exposure to data analysis that strengthens problem-solving abilities. Experienced with Git/GitHub, modern build tools, and basic Docker workflows. Fast learner, collaborative, and eager to contribute to building user-friendly, efficient web applications in a professional team environment.</p>
        
        {/* Skills */}
        <div>
            <p className='text-white font-semibold text-xl mb-3'>Skills:</p>
            <ul className=''>
                {aboutItems.map((item) => (
                    <li key={item.id}>
                        <p>✓ {item.label}</p>
                    </li>
                ))}
            </ul>
        </div>

        </div>
    </section>
  )
}

export default About
