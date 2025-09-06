import React from 'react'
import { contactItems } from '../constant/data';
import { li } from 'motion/react-client';
import { RiFacebookBoxFill, RiGithubFill } from '@remixicon/react';

const Contact = () => {
  return (
    <section className='py-20'>
        <div className='container grid gap-10 md:grid-cols-2 md:divide-x md:divide-neutral-800'>
            {/* content */}
            <div>
                <h2>Get In Touch</h2>
                <p className='mt-3.5 mb-7'>
                    I'm ready to join your next project. I may not be able to contribute a lot technically, but I believe my presence and support can still be valuable.
                </p>
                {/* List information */}
                <ul>
                    {contactItems.map((item) => (
                        <li key={item.id} className='flex items-center gap-1.5'>
                            <p className='text-white font-semibold '>{item.label}</p>
                            <a href={item.href}>{item.link}</a>
                        </li>
                    ))}
                </ul>

                {/* Social Information */}
                <div className='flex items-center gap-2 mt-6'>
                    <button 
                    onClick={() => window.open('https://www.facebook.com/pham.nguyen.trong.phuc.2025', '_blank')}
                    className='hover:text-neutral-300 transition-colors'>
                        <RiFacebookBoxFill size={30}/>
                    </button>
                    <button 
                    onClick={() => window.open('https://github.com/tfuc03', '_blank')}
                    className='hover:text-neutral-300 transition-colors'>
                        <RiGithubFill size={30}/>
                    </button>
                </div>
            </div>
            {/* Form */}
            <form action="" className='grid gap-5'>
                {/* Input field */}
                <div className=' grid gap-2'>
                    <label htmlFor="name">Name *</label>
                    <input type="text" placeholder='Enter Your Name' className='input' required />
                </div>

                {/* Input field */}
                <div className='grid gap-2'>
                    <label htmlFor="email">Email *</label>
                    <input type="email" placeholder='Enter Your Email' className='input' required />
                </div>

                {/* text Area */}
                <div className='grid gap-2'>
                    <label htmlFor="message">Message *</label>
                    <textarea id='message' placeholder='Enter Your Message' className='h-40 border border-neutral-800 indent-4 py-2 resize-none' 
                    required />
                </div>

                <button className="primary-btn max-w-max">Send Message</button>
            </form>
        </div>
    </section>
  );
};

export default Contact
