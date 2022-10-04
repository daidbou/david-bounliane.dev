import React from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

export const Main = () => {
  return (
    <div id="Home" className='z-10 w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-slate-400'>
                    CS Engineer student
                </p>
                <h1>Hi, I'm <span className='py-4 bg-gradient-to-r from-[#00d4ff] to-[#11d9bb] text-transparent bg-clip-text'>David</span></h1>
                <p className='py-4 text-md text-slate-300 max-w-[70%] m-auto'>
                    I'm learning Web and App development during my freetime. Currently, I'm focused on building responsive front-end web applications while learning back-end technologies.
                </p>
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
                        <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBXHfxRpMdFmzMlggTkcMGhflwlGRFbVhrJmnWqlPrlDzCXLLBgfHzJbqMWvlkPPNnqSB' target="_blank" rel="noopener noreferrer">
                            <div className='rounded-full bg-slate-600 p-3 cursor-pointer transition ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-black duration-300'>
                                <AiOutlineMail />
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/feed/update/urn:li:activity:6979600650976305152/' target="_blank" rel="noopener noreferrer">
                            <div className='rounded-full bg-slate-600 p-3 cursor-pointer transition ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-black duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </a> 
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Main