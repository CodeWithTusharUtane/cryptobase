import React, { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from 'react-icons/fa'
import { toast } from 'react-toastify'

const Footer = () => {

  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for Subscription')
    setInput('')
  }

  return (
    <div className='rounded-div mt-8 pt-8 text-primary font-poppins'>
        <div className="grid md:grid-cols-2 ">
          <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
            <div className="">
              <h2 className='font-bold'>Support</h2>
              <ul>
                <li className='text-sm py-2'>Help Center</li>
                <li className='text-sm py-2'>Contact Us</li>
                <li className='text-sm py-2'>API Status</li>
                <li className='text-sm py-2'>Documentation</li>
              </ul>
            </div>
            <div className="">
              <h2 className='font-bold'>Info</h2>
              <ul>
                <li className='text-sm py-2'>About Us</li>
                <li className='text-sm py-2'>Careers</li>
                <li className='text-sm py-2'>Invest</li>
                <li className='text-sm py-2'>Legal</li>
              </ul>
            </div>
          </div>
          <div className="text-right">
            <div className="w-full flex justify-end">
              <div className="w-full md:w-[300px] py-4 relative">
                <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                  <ThemeToggle/>
                </div>
                <p className='text-center md:text-right '>Sign up for crypto news</p>
                <div className="py-4">
                  <form onSubmit={handleSubmit}>
                    <input  onChange={(e)=>setInput(e.target.value)} value={input} className='bg-primary border border-input p-2 mr-2 w-full shadow-xl text-center rounded-full md:w-auto' type="email" placeholder='Enter your email'/>
                    <button type='submit' onClick={handleSubmit} className='bg-button text-btnText px-4 p-2 w-full  rounded-full shadow-xl hover:shadow-2xl md:w-auto my-2 lg:mr-16'>Sign up</button>
                  </form>
                </div>
                <div className="flex py-4 justify-between text-accent text-2xl ">
                  <AiOutlineInstagram/>
                  <FaTiktok/>
                  <FaTwitter/>
                  <FaFacebookF/>
                  <FaGithub/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer