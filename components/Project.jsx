'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import nuisible from '/public/assets/projects/nuisible.png'
import { motion } from "framer-motion";


function Project(props) {
  const techs = props.details.techs.map((tech)=>{
    return (
      <div className='flex flex-col items-center content-center text-center gap-1'>
        <Image src={tech.url} alt='no' width={30} height={30}/>
         <h3 className='text-sm font-normal'>{tech.title}</h3>
     </div>
  )
  })

  return (
    
<div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full ">
    <a href={props.details.demo} target="_blank">
    <Image className=" w-full rounded-2xl" src={props.details.image} alt='no'/>
    </a>
    <div className="p-5">
        <a href={props.details.demo}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-sec">{props.details.name}</h5>
        </a>
        <p className="font-normal text-gray-700 dark:text-gray-400">{props.details.description}</p>
        <div className='flex flex-row w-full rounded-xl  text-white items-center justify-start gap-10 py-4 flex-wrap mb-2 mx-6 '>
          {techs}
        </div>
        <div  className='flex flex-row justify-center gap-12 p-1'>
      {props.details.github!='' ? <button type="button" className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"><a target='_blank' href={props.details.github}>Github</a ></button>:<button disabled={true} type="button" className=" disabled inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] opacity-80">Github</button>}
        <button type="button"className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"><a target='_blank' href={props.details.demo}>Live Demo</a ></button>
        </div>

    </div>
</div>

    /* <div className='bg-prim content-center flex flex-col items-center p-4 px-4 gap-4 rounded-xl  shadow-prim  shadow-md flex-wrap md:w-2/6 m-4'>
    <Image className=" w-full rounded-2xl" src={props.details.image} alt='no'/>
    <p>{props.details.description}</p>
    <div className='flex flex-row w-full rounded-xl bg-ter text-white items-center justify-around py-4 flex-wrap bg-opacity-40'>
        {techs}
    </div>
    <div className='flex flex-row justify-between text-black items-center content-center gap-16 mt-4 font-medium flex-wrap pb-2'>
        <button className='bg-background text-white p-3 rounded-xl'><Link href={props.details.demo}>Live Demo</Link></button>
        <button><Link href={props.details.github} className='bg-background text-white p-3 rounded-xl'>Github</Link></button>
    </div>
   </div> */
   
  )
}

export default Project