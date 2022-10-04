import React from 'react'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaFigma} from 'react-icons/fa'
import {DiCss3, DiJavascript, DiReact, DiNodejsSmall, DiDocker} from 'react-icons/di'
import {SiAdobe} from 'react-icons/si'

export const Skills = () => {
    return (
        <div id='Skills' className='z-10 w-full lg:h-screen p-10'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className=' uppercase text-sm tracking-widest text-slate-400'>Skills</p>
            <h2 className=' py-4'>What can I do</h2>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                <div className=' py-20 rounded-xl shadow-lg shadow-black/40'>
                    <div className='h-full flex flex-col justify-center items-center p-4'>
                        <AiOutlineHtml5 size={200}/>
                        <h3>HTML5</h3>
                    </div>
                </div>
                <div className=' py-20 rounded-xl shadow-lg shadow-black/40'>
                    <div className='h-full flex flex-col justify-center items-center p-4'>
                        <DiCss3 size={200}/>
                        <h3>CSS</h3>
                    </div>
                </div>
                <div className=' py-20 rounded-xl shadow-lg shadow-black/40'>
                    <div className='h-full flex flex-col justify-center items-center p-4'>
                        <DiJavascript size={200}/>
                        <h3>JavaScript</h3>
                    </div>
                </div>
                <div className=' py-20 rounded-xl shadow-lg shadow-black/40'>
                    <div className='h-full flex flex-col justify-center items-center p-4'>
                        <DiReact size={200} />
                        <h3>ReactJS</h3>
                    </div>
                </div>
                <div className=' py-20 rounded-xl shadow-lg shadow-black/40'>
                    <div className='h-full flex flex-col justify-center items-center p-4'>
                        <DiNodejsSmall size={200}/>
                        <h3>Node.js</h3>
                    </div>
                </div>
                <div className=' py-20 rounded-xl shadow-lg shadow-black/40'>
                    <div className='h-full flex flex-col justify-center items-center p-4'>
                        <DiDocker size={200}/>
                        <h3>Docker</h3>
                    </div>
                </div>
                <div className=' py-20 rounded-xl shadow-lg shadow-black/40'>
                    <div className='h-full flex flex-col justify-center items-center p-4'>
                        <SiAdobe size={200}/>
                        <h3>Adobe</h3>
                    </div>
                </div>
                <div className=' py-20 rounded-xl shadow-lg shadow-black/40'>
                    <div className='h-full flex flex-col justify-center items-center p-4'>
                        <FaFigma size={200}/>
                        <h3>Figma</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
      )
    }

export default Skills