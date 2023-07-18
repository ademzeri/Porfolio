'use client'
import Skill from './Skill'
import React from 'react'
import Image from 'next/image'
import front from '/public/assets/front.png'
import back from '/public/assets/back.png'
import react from '/public/assets/react.png'
import tailwind from '/public/assets/tailwind.png'
import material from '/public/assets/material.png'
import next from '/public/assets/nextjs.png'
import firebase from '/public/assets/firebase.png'
import mysql from '/public/assets/mysql.png'
import canva from '/public/assets/canva.png'
import figma from '/public/assets/figma.png'
import git from '/public/assets/git.png'
import trello from '/public/assets/trello.png'
import wordpress from '/public/assets/wordpress.png'
import java from '/public/assets/java.png'
import cpp from '/public/assets/c++.png'
import python from '/public/assets/python.png'
import js from '/public/assets/js.png'
import Tools from '/public/assets/tools.png'
import Languages from '/public/assets/languages.png'
import { motion } from "framer-motion";



function Skills() {
    const frontEnd = [{title : 'ReactJs',url :react},{title : 'Tailwind',url  :tailwind},{title : 'Material',url  :material},{title : 'NextJs',url  :next}]
    const backEnd = [{title : 'Firebase',url :firebase},{title : 'MySql',url  :mysql}]
    const design = [{title : 'Canva',url :canva},{title : 'Figma',url  :figma}]
    const tools = [{title : 'Wordpress',url :wordpress},{title : 'Trello',url  :trello},{title : 'Git',url  :git}]
    const languages = [{title : 'Javascript',url :js},{title : 'C++',url  :cpp},{title : 'Python',url  :python},{title : 'Java',url  :java}]
    return (
    <div className='flex flex-col text-center mt-10 mb-6 font-sans'>
        <h1 className='text-5xl underline underline-offset-8 decoration-ter text-sec mt-20 mb-4 tracking-tight drop-shadow-2xl section--title font-extrabold'>Technical Skills</h1>
        <div className='flex lg:flex-row flex-col justify-center mt-16 text-center lg:gap-x-24 lg:gap-y-20 gap-20 flex-wrap items-center'>
        <Skill title="Front-End Technologies" skillImage={front} techs={frontEnd}/>
        <Skill title="back-End Technologies" skillImage={back} techs={backEnd}/>
        <Skill title="programming Languages" skillImage={Languages} techs={languages}/>
        <Skill title="Other Tools" skillImage={Tools} techs={tools}/>


        </div>
    </div>
  )
}

export default Skills