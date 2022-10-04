import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

export const Footer = () => {
  return (
    <div className=' sticky w-full h-[30vh] p-10 mt-20 shadow-xl bg-black/40'>
        <div className='max-w-[330px] h-full mx-auto justify-center align-middle items-center'>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href='https://www.linkedin.com/in/david-bounliane' target="_blank" rel="noopener noreferrer">
                        <div className='rounded-full bg-slate-600 p-3 cursor-pointer transition ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-black duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a href='https://github.com/daidbou' target="_blank" rel="noopener noreferrer">
                        <div className='rounded-full bg-slate-600 p-3 cursor-pointer transition ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-black duration-300'>
                            <FaGithub />
                        </div>
                    </a>
                    <a href='#' target="_blank" rel="noopener noreferrer">
                        <div className='rounded-full bg-slate-600 p-3 cursor-pointer transition ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-black duration-300'>
                            <AiOutlineMail />
                        </div>
                    </a>
                    <a href='#' target="_blank" rel="noopener noreferrer">
                        <div className='rounded-full bg-slate-600 p-3 cursor-pointer transition ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-black duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </a> 
                </div>
                <ul className='flex items-center justify-between'>
                        <a href="/#Home">
                            <li className=' uppercase text-slate-400 py-2 hover:text-white'>
                                Home
                            </li>
                        </a>
                        <a href="/#About">
                            <li className=' uppercase text-slate-400 py-2 hover:text-white'>
                                About
                            </li>
                        </a>
                        <a href="/#Skills">
                            <li className='uppercase text-slate-400 py-2 hover:text-white'>
                                Skills
                            </li>
                        </a>
                        <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBXHfxRpMdFmzMlggTkcMGhflwlGRFbVhrJmnWqlPrlDzCXLLBgfHzJbqMWvlkPPNnqSB">
                            <li className=' uppercase text-slate-400 py-2 hover:text-white'>
                                Contact
                            </li>
                        </a>
                   </ul>
                   <div className='text-center p-4'>
                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBXHfxRpMdFmzMlggTkcMGhflwlGRFbVhrJmnWqlPrlDzCXLLBgfHzJbqMWvlkPPNnqSB'>
                            <p className='uppercase text-sm tracking-widest text-slate-400 py-2 hover:text-white'>david.bounliane@utt.fr</p>
                        </a>
                        <p className='uppercase text-sm tracking-widest text-slate-400'>Design by - <span className=' text-blue-400'>david-bounliane</span></p>
                   </div>
        </div>
    </div>
  )
}

export default Footer