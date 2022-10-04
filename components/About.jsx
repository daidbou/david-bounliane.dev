import React from 'react'
import Spline from '@splinetool/react-spline';

export const About = () => {
  return (
    <div id="About" className='z-10 w-full h-screen p-10'>
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <div className='basis-full lg:basis-1/2 z-10'>
                    <p className='uppercase text-sm tracking-widest text-slate-400'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='text-md text-slate-300'>
                      I'm currently doing my Computer Science and Information Systems at l'Université de Technologie de Troyes.
                      To complete my educational course, I'm looking for a 6-month internship starting from february 2022 !
                      <br/>
                      The web development 

                    </p>
                </div>
                <div className='relative p-10 basis-full h-1/2 lg:basis-1/2 lg:h-full'>
                    <div className='absolute inset-0 '>
                        <Spline scene="https://prod.spline.design/u9xgpRvlLX-JJ78K/scene.splinecode" />
                    </div>
                </div>
        </div>
    </div>
    
  )
}

export default About
