import React from 'react'
import Link from 'next/link'

export const NavList = () => {

    const elements = [
        {
            name : 'home', 
            link : '/#Home'
        },
        {
            name : 'about',
            link : '/#About'
        },
        {
            name : 'skills', 
            link : '/#Skills'
        },
        {
            name : 'contact', 
            link : 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZBXHfxRpMdFmzMlggTkcMGhflwlGRFbVhrJmnWqlPrlDzCXLLBgfHzJbqMWvlkPPNnqSB'
        } 
    ]

    const list = elements.map((element) => {
        return (
            <Link href={element.link} key={element.name} >
                <li key={element.toString()} value={element.name} className='ml-10 text-sm uppercase hover:bg-gradient-to-r from-[#F78770] to-[#FF607B] hover:text-transparent hover:bg-clip-text transition ease-in-out duration-350'>{element.name}</li>
            </Link>
        )
    })
  return (
    <ul className='hidden md:flex'>
        {list}
    </ul>
  )
}
