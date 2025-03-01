import React from 'react';
import { FaYoutube } from "react-icons/fa";
import { Button } from './ui/moving-border';
import { MdOpenInNew } from "react-icons/md";
import Link from 'next/link';

const Channel = () => {
  return (
    <div className='md:pt-10 pt-6 pb-5' id='channel'>
        <h1 className="text-4xl pb-3 md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-600 to-slate-900 bg-opacity-50">
            Canal do Youtube
        </h1>
        <div className='flex m-auto justify-center gap-1 cursor-pointer'>
            <Link href="https://www.youtube.com/@LudigoGabriel" target='_blank' className='flex'>
                <FaYoutube className='text-4xl md:text-5xl text-[#FF0000] mr-3'/>
                <h2 className="text-3xl hover:underline hover:text-slate-600 md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-500 to-slate-600 bg-opacity-50">
                    @Ludigo
                </h2>
                <MdOpenInNew className='text-slate-600 md:text-3xl text-2xl mt-2'/>
            </Link>
        </div>
        <div className='md:mt-12 mt-6 flex flex-col md:flex-row justify-between w-full md:w-3/4 m-auto gap-5'>
            <div className='md:mt-10 md:m-0 m-auto'>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white px-24 md:px-16 py-10 flex flex-col dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    <h2 className='text-4xl md:text-5xl font-bold mt-2'>+22.000</h2>
                    <h3 className='text-xl mt-3 text-center'>Visualizações</h3>
                </Button>
            </div>
            <div className='md:m-0 m-auto'>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white md:px-24 px-[119px] py-10 flex flex-col dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    <h2 className='text-4xl md:text-7xl font-bold mt-2'>+500</h2>
                    <h3 className='md:text-2xl text-xl mt-3 text-center'>Inscritos</h3>
                </Button>
            </div>
            <div className='md:mt-10 md:m-0 m-auto'>
                <Button
                    borderRadius="1.75rem"
                    className="bg-white md:px-16 px-[105px] py-10 flex flex-col dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    <h2 className='md:text-5xl text-4xl font-bold mt-2'>+1.800</h2>
                    <h3 className='text-xl mt-3 text-center'>Likes</h3>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Channel
