'use client'


import React from 'react'
import Image from 'next/image'

function Skill (props) {
  const techs = props.techs.map((tech) => {
    return (
        <div className='flex flex-col items-center content-center text-center gap-2'>
          <Image src={tech.url} alt='no' width={50} height={50}/>
           <h3>{tech.title}</h3>
       </div>
    )
  })
    return (
    <div className='bg-ter content-center flex flex-col items-center py-4 px-6 gap-4 rounded-2xl shadow-2xl  lg:w-2/5 m-4 w-4/6'>
    <Image className="mx-4" src={props.skillImage} alt='no' width={80} height={80}/>
    <h2 className='text-black font-semibold text-xl'>{props.title}</h2>
    <div className='flex flex-row md:justify-between justify-around text-black items-center content-center gap-10 mt-4 font-medium md:flex-nowrap flex-wrap'>
        {techs}
    </div>
   </div>
  )
}

export default Skill;