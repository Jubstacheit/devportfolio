'use client'

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";
import profile from "../public/profile.png";
import design from '../public/design.png';
import code from '../public/code.png';
import { useState } from 'react';




export default function Home() {
  // Dark mode
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ""}>
      <div className='sticky top-0'>
        <nav className='px-10 md:px-20 lg:px-40 py-10 mb-12 flex justify-between bg-white dark:bg-gray-900 dark:text-white'>
          <h1 className='text-xl font-JetBrains_MonoBold'>VIVIANE&apos;S PORTFOLIO</h1>
          <ul className='flex items-center ml-4'>
            <li>
              <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/>
            </li>
            <li>
              <a className='font-JetBrains_MonoBold bg-gradient-to-r from-violet-300 to-purple-500 text-white px-4 py-2 rounded-md ml-8' href="/CV.pdf" download="Viviane Dessaint - CV" >Resume</a>
            </li>
          </ul>
        </nav>
      </div>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">          
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-purple-500 font-JetBrains_Mono font-medium md:text-6xl dark:text-violet-300'>
              Viviane Dessaint
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
              Web and mobile developer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200'>
              Developing SASS mobile and web applications with React Native, ReactJS and NextJS.
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
              <a href='https://www.linkedin.com/in/vivianedessaint/'>
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Jubstacheit">
                <AiFillGithub />
              </a>
            </div>
            <div className='p-2 mx-auto bg-gradient-to-b from-blue-400 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96'>
              <Image alt='Profile picture' src={profile} objectFit='cover' />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Worked with Vittascience etc etc
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image alt='Design icon' src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
              <p className='py-2'>
                Creating elegant designs blablabla je vais pas garder ça
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Liste des logiciels</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image alt='Design icon' src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
              <p className='py-2'>
                Creating elegant designs blablabla je vais pas garder ça
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Liste des logiciels</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image alt='Design icon' src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful designs</h3>
              <p className='py-2'>
                Creating elegant designs blablabla je vais pas garder ça
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800 py-1'>Liste des logiciels</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
              Worked with Vittascience etc etc
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image alt='Project 1' src={profile} className='rounded-lg object-cover' width={'100%'} height={"100%"} layout='responsive' />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
