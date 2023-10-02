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
                      My name is David Bounliane, and I am currently in my fifth year of engineering studies of CS engineering school 
                      at <strong><a href="https://www.utt.fr">l'Université de Technologie de Troyes</a></strong>. 
                      From the moment I wrote my first line of code, I realized that software development wasn't just a field of study for me, but a passion. 
                      The intricacies of algorithms, the challenges of debugging, and the satisfaction of seeing a working application come to life captivate me like nothing else.
                      Over the course of my academic journey, I have not only acquired theoretical knowledge but also have dedicated countless hours to practical applications, 
                      projects, and extracurricular activities that revolve around programming. 
                      Each experience has only deepened my love for the domain and affirmed my belief that this is the path I want to tread on.
                      Now, as I approach the culmination of my engineering program, I am eager to immerse myself further and refine my skills in a real-world setting. 
                      I am seeking an internship opportunity that would allow me to be a part of innovative software development 
                      projects and work alongside professionals who share the same zeal for technology as I do.
                      I am confident that with my passion, combined with the academic foundation I have built, I can contribute positively to any team and project. 
                      Furthermore, this internship will be invaluable in equipping me with the knowledge and experience necessary to excel in my future career in software development.
                      <br/>
                      <br/>
                      if you are looking for a intern, feel free to contact me on Linkedin : </p>
                      <a href='' ><p id='copy' className=' text-blue-400'>linkedin.com/in/david-bounliane/</p></a>
                      <p className='text-md text-slate-300'>or at my email address : </p><a href=''><p id='copy1' className=' text-blue-400'>david.bounliane@gmail.com</p></a>

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
