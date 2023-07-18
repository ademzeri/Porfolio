'use client'
import emailjs from '@emailjs/browser';
import  React, { useRef,useState  } from 'react';
function Contact() {
const [sent,setSent] = useState(false);
const form = useRef();
const sendEmail = (e) => {
e.preventDefault();
emailjs.sendForm('porfolio', 'template_nipjgme', form.current, '0OHmaV3pJEeSguCdl')
.then((result) => {
setSent(true);
console.log(result.text);
}, (error) => {
console.log(error.text);
});
};
return (
<div className='flex flex-col text-center mt-10 font-sans pb-16 mx-3 '>
   <h1 className='md:text-5xl text-4xl underline underline-offset-8 decoration-ter text-sec mt-20 mb-8 tracking-tight drop-shadow-2xl section--title font-extrabold'>Let's Talk</h1>
   <div class="relative flex items-top justify-center sm:items-center sm:pt-0">
      <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
         <div class="mt-8 overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
               <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                  <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                     Get in touch
                  </h1>
                  <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                     Fill in the form to start a conversation
                  </p>
                  <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                     </svg>
                     <div class="ml-4 text-md tracking-wide font-semibold w-40">
                        Tunisia, Sousse
                     </div>
                  </div>
                  <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                     </svg>
                     <div class="ml-4 text-md tracking-wide font-semibold w-40">
                        +216 29261650
                     </div>
                  </div>
                  <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                     <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                     </svg>
                     <div class="ml-4 text-md tracking-wide font-semibold w-40">
                        adem.zeri1234@gmail.com
                     </div>
                  </div>
               </div>
               <form ref={form} onSubmit={sendEmail} class="p-6 flex flex-col justify-center">
                  <div class="flex flex-col">
                     <label for="name" class="hidden">Full Name</label>
                     <input required type="name" name="user_name" id="name" placeholder="Full Name" class="text-white w-100 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border border-gray-400 dark:border-gray-700  font-semibold focus:border-indigo-500 focus:outline-none"></input>
                  </div>
                  <div class="flex flex-col mt-2">
                     <label for="email" class="hidden">Email</label>
                     <input required type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"></input>
                  </div>
                  <div class="flex flex-col mt-2">
                     <label for="message" class="hidden">Message</label>
                     <input required type="text"  name="message" id="message" placeholder="Your Message" class="w-100 mt-2 py-3 px-3 rounded-lg  bg-gray-800 border border-gray-400 dark:border-gray-700 text-white font-semibold focus:border-indigo-500 focus:outline-none"></input>
                  </div>
                  <button type="submit" class="md:w-32 bg-sec hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-6 hover:bg-indigo-500 transition ease-in-out duration-300">
                  Send
                  </button>
               </form>

            </div>
            {sent && 
               <div class="bg-green-100 rounded-md p-3 flex mt-14 lg:w-3/4 mx-auto text-start">
                  <svg
                     class="stroke-2 stroke-current text-green-600 h-8 w-8 mr-2 flex-shrink-0"
                     viewBox="0 0 24 24"
                     fill="none"
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     >
                     <path d="M0 0h24v24H0z" stroke="none" />
                     <circle cx="12" cy="12" r="9" />
                     <path d="M9 12l2 2 4-4" />
                  </svg>
                  <div class="text-green-700">
                     <div class="font-bold text-xl">Email sent successfully!</div>
                     <div>
                        Thank you for expressing your interest in working with me. I'm thrilled about the potential opportunity to collaborate together. I will reach out to you as soon as possible.</div>
                  </div>
               </div>
               }
         </div>
      </div>
   </div>
</div>
)
}
export default Contact