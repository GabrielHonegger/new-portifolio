'use client';
import React from 'react'
import { IoMail } from "react-icons/io5";
import { Button } from './ui/moving-border';
import { FaLinkedin } from 'react-icons/fa';
import { FaRegCopy } from "react-icons/fa6";
import { useToast } from './hooks/use-toast';
import { MdOpenInNew } from 'react-icons/md';
import Link from 'next/link';

const Contact = () => {
    const email = "gabrielhonegger132@gmail.com";
    const { toast } = useToast();

    const copyEmailToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            toast({
                title: "E-mail copiado!"
              })
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
    };
  return (
    <div>
        <h1 className="text-3xl md:mt-10 mt-7 md:pb-3 md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-600 to-slate-900 bg-opacity-50">
            Entre em Contato
        </h1>
        <div className='md:w-2/3 w-[90%] mt-6 flex md:flex-row flex-col md:gap-10 gap-4 m-auto mb-14 md:mb-14'>
            <Button
                borderRadius="1.75rem"
                className="bg-white md:px-12 py-6 flex gap-2 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                <IoMail className='md:text-2xl text-xl md:mt-1' />
                <div onClick={() => copyEmailToClipboard(email)} className='cursor-pointer flex gap-2'>
                    <p className="md:text-lg text-base hover:underline">
                        {email}
                    </p>
                    <FaRegCopy className='text-lg md:text-xl mt-1' />
                </div>
                
            </Button>
            <Button
                borderRadius="1.75rem"
                className="bg-white md:px-12 py-6 md:w-[415px] flex gap-2 dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                <FaLinkedin className='md:text-2xl text-xl md:mt-1' />
                <Link href="https://www.linkedin.com/in/gabrielhonegger" target='_blank' className='flex gap-2'>
                    <p className='md:text-lg text-base cursor-pointer hover:underline'>gabrielhonegger</p>
                    <MdOpenInNew className='text-slate-600 text-xl md:text-2xl mt-1'/>
                </Link>
            </Button>
        </div>
    </div>
  )
}

export default Contact