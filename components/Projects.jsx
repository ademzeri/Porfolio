'use client'
import react from '/public/assets/react.png'
import tailwind from '/public/assets/tailwind.png'
import material from '/public/assets/material.png'
import next from '/public/assets/nextjs.png'
import firebase from '/public/assets/firebase.png'
import figma from '/public/assets/figma.png'
import wordpress from '/public/assets/wordpress.png'
import React from 'react'
import Project from './Project'
import nuisible from '/public/assets/projects/nuisible.png'
import justsimple from '/public/assets/projects/justsimple.png'
import nextchat from '/public/assets/projects/nuisible.png'
import clonage from '/public/assets/projects/clonage.png'
import html from '/public/assets/html.png'
import css from '/public/assets/css.png'
import porfolio from '/public/assets/projects/porfolio.png'

const projects = [
    {
    name:"nuisibleExpert",
    image:nuisible
    ,description:' I developed my first wordpress website for a French company that offers rat extermination and cleaning services in Paris as a freelance project.'
    ,github:'',
    demo:'https://nuisiblexpert.fr/',
    techs:[
      {title : 'Wordpress',url :wordpress},{title : 'Figma',url  :figma}]
    },
    {
      name:"JustSimple",
      image:justsimple
      ,description:'I developed this website for a training center as part of a PSC project for my friend. The website offers math and physics summaries for students in 7th, 8th, and 9th grade.'
      ,github:'https://github.com/ademzeri/just-learn',
      demo:' https://ademzeri.github.io/just-learn/',
      techs:[
        {title : 'ReactJs',url :react},{title : 'Tailwind',url  :tailwind},{title : 'Material',url  :material}]
      },
      {
        name:"Cloning Task",
        image:clonage
        ,description:'This freelance project involved creating HTML and CSS pages for a client who requested a website with the same navbar and footer as the FedEx website and a different content for the rest of the pages'
        ,github:'https://github.com/ademzeri/FEDEX-CLON',
        demo:'https://ademzeri.github.io/FEDEX-CLON/',
        techs:[
          {title : 'HTML',url :html},,{title : 'CSS',url  :css},{title : 'Tailwind',url  :tailwind}]
        },
        {
          name:"Porfolio",
          image:porfolio,
          description:'I have designed and developed this captivating portfolio website with a specific purpose in mind: to seamlessly transition from React to Next.js while effectively showcasing my work.'
          ,github:'https://github.com/ademzeri/Porfolio',
          demo:'https://porfolio-alpha-tawny.vercel.app/',
          techs:[
            {title : 'NextJs',url  :next},{title : 'Tailwind',url  :tailwind},{title : 'Material',url  :material},{title : 'Figma',url  :figma}]
          },
    ]




function Projects() {
  const myProjects = projects.map((project) => {
    <Project details={project} />
  })

  console.log(myProjects)
  return (
    <div className='flex flex-col text-center mt-10 mb-6 font-sans pb-10 mx-3 '>
        <h1 className='md:text-5xl text-4xl underline underline-offset-8 decoration-ter text-sec mt-20 mb-4 tracking-tight drop-shadow-2xl section--title font-extrabold '>Personal Projects</h1>
        <div className='flex md:flex-row flex-col justify-center mt-16 text-center md:gap-x-40 md:gap-y-20 gap-20 flex-wrap items-center'>
          <Project details={projects[0]} /> 
          <Project details={projects[1]} /> 
          <Project details={projects[2]} /> 
          <Project details={projects[3]} /> 
        </div>
    </div>
  )
}

export default Projects