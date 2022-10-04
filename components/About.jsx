import React from 'react'
import Spline from '@splinetool/react-spline';
// @refresh reset
export const About = () => {
  return (
    <div id="About" className='z-10 w-full sm:h-screen p-10'>
        <div className="max-w-[1240px] mx-auto flex flex-wrap justify-center h-full">
                <div className='basis-full lg:basis-1/2'>
                    <p className='uppercase text-sm tracking-widest text-slate-400'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='text-md text-slate-300'>
                      Hello nice to meet you, my name is David I'm 21 years old and I'm in 4th year of CS engineering school at <strong><a href="https://www.utt.fr">l'Université de Technologie de Troyes</a></strong>. I like many things, like sports, photography, music, cooking but most importantly programming.
                      
                        I am seeking for a six-month internship starting from February 2023. I wish to deepen my knowledge in web development, both as front-end and back-end. <br/>I already know how to code in php and javascript, however I still have a superficial knowledge of frameworks built on these languages.
                      
                      A 6 months internship would be for me the opportunity to learn how to work in a team, master one or more frameworks like ReactJS, AngularJS or Laravel and especially gain experience and maturity in this domain. I am eager to learn web development.
                      <br/>
                      <br/>
                      if you are looking for a intern in web development, feel free to contact me on Linkedin or at my email address.
                    </p>

                    
                </div>
                <div className='relative p-10 basis-full h-1/2 lg:basis-1/2'>
                    <div className='absolute inset-0 '>
                        <Spline scene="https://prod.spline.design/u9xgpRvlLX-JJ78K/scene.splinecode" />
                    </div>
                </div>
        </div>
    </div>
    
  )
}

export default About
