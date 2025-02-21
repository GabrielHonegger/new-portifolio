'use client';

import React from 'react'
import { Modal, ModalBody, ModalContent, ModalTrigger } from "@/components/ui/animated-modal";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import { FaFileDownload } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaRegCopy } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';
import { MdOpenInNew } from 'react-icons/md';
import { useToast } from './hooks/use-toast';

const Hero = () => {
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
        toast({
          variant: "destructive",
          title: "Erro ao copiar!"
        })
    });
};
  return (
    <div className="bg-black/[0.96]" id='home'>
      <div className="md:h-[40rem] w-full flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div>
          <Spotlight
          className="-top-36 left-0 md:left-60 md:-top-20"
          fill="white"
          />
          <div className="flex md:w-11/12 m-auto">
            <div className="md:p-4 p-6 max-w-7xl mt-5 mx-auto relative z-10 w-full pt-6 md:pt-0">
              <h1 className="text-4xl pb-3 md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 bg-opacity-50">
              Gabriel Honegger
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                Desenvolvedor Web Full Stack
              </h2>
              <Image className="m-auto mt-5 w-[65%] block md:hidden rounded-full" src="/me-job.png" alt="profile-picture" width={500} height={500}/>
              <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              Transformo visões digitais em realidade. Minha paixão por web design vai além da criação de sites bonitos - busco desenvolver experiências online únicas e impactantes que elevam a presença digital dos meus clientes.
              </p>
              <div className="flex w-[300px] m-auto mt-8 justify-center gap-4">
                <Modal>
                  <ModalTrigger className="bg-white rounded-full px-8 dark:bg-white dark:text-black text-black flex justify-center group/modal-btn">
                    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                      Entrar em Contato
                    </span>
                    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
                      <IoMail />
                    </div>
                  </ModalTrigger>
                  <ModalBody>
                    <ModalContent>
                      <h4 className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                        Informações de Contato
                      </h4>
                      <div className='flex gap-1'>
                        <IoMail className='mt-[2px] text-xl' />
                        <p className='mb-3'>Email:</p>
                      </div>
                      <div onClick={() => copyEmailToClipboard(email)} className='flex cursor-pointer gap-1'>
                        <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                            {email}
                        </span>
                        <span className="px-2 hover:bg-gray-200 active:bg-gray-300 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                        <FaRegCopy className='text-slate-600 text-lg mt-1'/>
                        </span>
                      </div>
                      <div className='flex gap-1 mt-8'>
                        <FaLinkedin className='mt-[2px] text-xl' />
                        <p className='mb-3'>Linkedin:</p>
                      </div>
                      <Link href="https://www.linkedin.com/in/gabrielhonegger" target='_blank' className='cursor-pointer'>
                        <div className='flex gap-1'>
                        <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                          gabrielhonegger
                        </span>
                        <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                          <MdOpenInNew className='text-slate-600 text-xl mt-1'/>
                        </span>
                        </div>
                      </Link>
                    </ModalContent>
                  </ModalBody>
                </Modal>
              </div>
              <div className="flex w-28 text-white text-3xl mb-3 md:mb-0 m-auto mt-5 gap-4 justify-center">
                <Link className='ml-5' href="https://www.linkedin.com/in/gabrielhonegger" target='_blank'><FaLinkedin/></Link>
                <Link href="https://github.com/GabrielHonegger" target='_blank'><IoLogoGithub /></Link>
              </div>
            </div>
            <Image className="m-auto hidden md:block rounded-full" src="/me-job.png" alt="profile-picture" width={500} height={500}/>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Hero