import React, {useState, useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { NavList } from './NavList'
import Link from 'next/link'

export const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false)
    const handleNav = () => {setNav(!nav)
    } 

    useEffect(() => {
        const handleShadow = () => {
            window.scrollY>=90 ? setShadow(true) : setShadow(false) 
        }; window.addEventListener('scroll', handleShadow);}, [])

    

  return (
    <div style={{backgroundColor : `#1b1f22`}} className={shadow ? 'z-50 fixed w-full h-20 shadow-xl' : 'z-100 fixed w-full h-20'}>
        <div className='flex justify-between items-start w-full h-full px-4 pt-8 2xl:px-16'>
                <Link href='#'>
                    <div className=" font-mono font-bold text-2xl bg-gradient-to-r from-[#00d5ff] to-[#11d9bb] text-transparent bg-clip-text cursor-pointer">
                        {'</>'}db
                    </div>
                </Link>
            <div>
                <NavList />
                <div onClick={handleNav} className="md:hidden mr-2">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
        <div className={nav ? 'z-100 fixed left-0 top-0 w-full h-screen bg-black/70 lg:hidden' : 'lg:hidden'}>
            <div className={nav ? 'fixed right-0 top-0 w-[70%] sm:w-[50%] md:w-[45%] h-screen bg-slate-800 px-6' : 'hidden'}>
                <div  className='flex w-full items-center justify-end border-b border-white'> 
                    <div onClick={handleNav} className='rounded-full mt-6 mb-2 p-2 cursor-pointer transition ease-in-out hover:shadow-sm hover:shadow-black hover:scale-105 duration-300'>
                        <AiOutlineClose size={25}/>
                    </div>
                </div>
                <ul className='uppercase'>
                    <Link href='/#Home'>
                        <li id='home2' className="py-4 text-sm transition ease-in-out hover:scale-105 hover:translate-x-3 duration-350">Home</li>
                    </Link>
                    <Link href='/#About'>
                        <li id='about2' className="py-4 text-sm transition ease-in-out hover:scale-105 hover:translate-x-3 duration-350">About</li>
                    </Link>
                    <Link href='/#Skills'>
                        <li id='skills2' className="py-4 text-sm transition ease-in-out hover:scale-105 hover:translate-x-3 duration-350">Skills</li>
                    </Link>
                    <a href='/https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBXHfxRpMdFmzMlggTkcMGhflwlGRFbVhrJmnWqlPrlDzCXLLBgfHzJbqMWvlkPPNnqSB'>
                        <li id='contact2' className="py-4 text-sm transition ease-in-out hover:scale-105 hover:translate-x-3 duration-350">Contact</li>
                    </a>
                </ul>
                <div className='pt-[15vh] md:pt-[55vh]'>
                    <p className='uppercase tracking-widest text-slate-400 pb-2'>let's connect</p>
                    <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
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
                        <a href='https://drive.google.com/file/d/1SDZTxpTkOhIJCxUHZJHpe_Gya8dVUySG/view?usp=sharing' target="_blank" rel="noopener noreferrer">
                            <div className='rounded-full bg-slate-600 p-3 cursor-pointer transition ease-in-out hover:scale-105 hover:shadow-sm hover:shadow-black duration-300'>
                                <BsFillPersonLinesFill />
                            </div>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar;