"use client";
import React from 'react'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from 'next/link'
import { Modal, ModalTrigger } from './ui/animated-modal'
import { FaExternalLinkAlt } from "react-icons/fa";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { CardStack } from './ui/card-stack';
import { cn } from "@/lib/utils";

export const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    );
  };

const CARDS1 = [
    {
      id: 0,
      name: "Next.js",
      designation: "Javascript Framework",
      content: (
        <p>
            O framework Next.js foi usado tanto para fazer o site <Highlight>mais rápido</Highlight>
            com páginas pré-renderizadas do lado do servidor quanto para fazer
            as <Highlight>requisições com a API de emails</Highlight> (Resend).
        </p>
      ),
    },
    {
      id: 1,
      name: "Zod",
      designation: "Data Validation",
      content: (
        <p>
            Zod foi usado para a <Highlight>validação e sanitização</Highlight> de dados tanto do
            lado do cliente quanto do servidor.
        </p>
      ),
    },
    {
      id: 2,
      name: "reCAPTCHA",
      designation: "Security Tool",
      content: (
        <p>
            Utilizei o reCAPTCHA no projeto para aumentar a segurança, <Highlight>protegendo 
            contra acessos automatizados e ataques de bots</Highlight>, deixando o site
            mais seguro e confiável para os usuários.
        </p>
      ),
    },
    {
        id: 3,
        name: "Resend",
        designation: "Email API",
        content: (
          <p>
            Utilizei a API de emails Resend para fazer com que os formulários (tanto de contato quanto de
            solicitação de orçamento) <Highlight>chegassem nas caixas de emails dos proprietários do site.</Highlight>
          </p>
        ),
      },
      {
        id: 4,
        name: "Tailwind",
        designation: "CSS Framework",
        content: (
          <p>
            Utilizei o Tailwind no projeto para facilitar na <Highlight>criação de
            designs modernos e responsivos</Highlight>. Além de deixar todo o <Highlight>processo
            de estilização mais rápido e eficiente</Highlight> se comparado ao uso de
            CSS puro, por exemplo.
          </p>
        ),
      },
      {
        id: 5,
        name: "Vercel",
        designation: "Cloud Hosting",
        content: (
          <p>
            Usei a Vercel como plataforma de hospedagem para <Highlight>facilitar o deploy</Highlight> e a integração contínua
            do projeto. Também foi considerado que a plataforma inclui <Highlight>escalabilidade automática</Highlight> e um ótimo desempenho.
          </p>
        ),
      },
  ];

const CARDS2 = [
  {
    id: 0,
    name: "Next.js",
    designation: "Javascript Framework",
    content: (
      <p>
          Utilizei o Next.js no frontend do meu projeto devido aos seus recursos avançados, 
          como renderização do lado do servidor e geração de sites estáticos, recursos que 
          <Highlight>melhoraram a performance e o SEO da aplicação</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    name: "Django",
    designation: "Python Framework",
    content: (
      <p>
          Utilizei o Django no backend por sua robustez e facilidade de uso, 
          permitindo um <Highlight>desenvolvimento mais rápido do projeto</Highlight>. Seus recursos integrados, 
          como o ORM e o painel de admin, facilitaram a gestão de dados 
          e a implementação das funcionalidades complexas.
      </p>
    ),
  },
  {
    id: 2,
    name: "Postgres",
    designation: "SQL Database",
    content: (
      <p>
        Usei o PostgreSQL como base de dados devido à sua robustez e confiabilidade. 
        A <Highlight>confidencialidade das informações</Highlight> foi um fator crucial a se considerar, especialmente 
        considerando que a aplicação lida com <Highlight>dados sensíveis dos pacientes</Highlight>.
      </p>
    ),
  },
  {
      id: 3,
      name: "Railway",
      designation: "Cloud Hosting",
      content: (
        <p>
          Fiz a escolha da Railway como plataforma de hospedagem para o <Highlight>backend em Django e para
          a base de dados PostgresSQL</Highlight> do projeto. Isso proporciona uma configuração simplificada
          e facilidade no gerenciamento do ambiente de produção.
        </p>
      ),
    },
    {
      id: 4,
      name: "Shadcn",
      designation: "Component Library",
      content: (
        <p>
          Usei o Shadcn no projeto para aproveitar a sua biblioteca de componentes React
          pré-estilizados, o que facilitou na criação de um <Highlight>design personalizável e consistente.</Highlight>
        </p>
      ),
    },
    {
      id: 5,
      name: "Tailwind",
      designation: "CSS Framework",
      content: (
        <p>
          Utilizei o Tailwind no projeto para facilitar na <Highlight>criação de
          designs modernos e responsivos</Highlight>. Além de deixar todo o <Highlight>processo
          de estilização mais rápido e eficiente</Highlight> se comparado ao uso de
          CSS puro, por exemplo.
        </p>
      ),
    },
    {
      id: 6,
      name: "Vercel",
      designation: "Cloud Hosting",
      content: (
        <p>
          Usei a Vercel como plataforma de hospedagem para <Highlight>facilitar o deploy</Highlight> e a integração contínua
          do projeto. Também foi considerado que a plataforma inclui <Highlight>escalabilidade automática</Highlight> e um ótimo desempenho.
        </p>
      ),
    },
];

const tools1 = [
    {
      id: 1,
      name: "Next.js",
      designation: "JS Framework",
      image:
        "/logos/nextjs.png",
    },
    {
      id: 2,
      name: "Zod",
      designation: "Data Validation",
      image:
        "/logos/zod.png",
    },
    {
      id: 3,
      name: "reCAPTCHA",
      designation: "Security Tool",
      image:
        "/logos/recaptcha.jpg",
    },
    {
      id: 4,
      name: "Resend",
      designation: "Email API",
      image:
        "/logos/resend.png",
    },
    {
      id: 5,
      name: "Tailwind",
      designation: "CSS Framework",
      image:
        "/logos/tailwind.jpg",
    },
    {
        id: 6,
        name: "Vercel",
        designation: "Cloud Hosting",
        image:
          "/logos/vercel.png",
      },
  ];

const tools2 = [
{
    id: 1,
    name: "Django",
    designation: "Python Framework",
    image:
    "/logos/django.png",
},
{
    id: 2,
    name: "Next.js",
    designation: "JS Framework",
    image:
    "/logos/nextjs.png",
},
{
    id: 3,
    name: "Postgres",
    designation: "SQL Database",
    image:
    "/logos/postgres.png",
},
{
    id: 4,
    name: "Railway",
    designation: "Cloud Hosting",
    image:
    "/logos/railway.svg",
},
{
    id: 5,
    name: "Shadcn",
    designation: "Component Library",
    image:
    "/logos/shadcn.png",
},
{
    id: 6,
    name: "Tailwind",
    designation: "CSS Framework",
    image:
    "/logos/tailwind.jpg",
},
{
    id: 7,
    name: "Vercel",
    designation: "Cloud Hosting",
    image:
        "/logos/vercel.png",
    },
];
  

const Projects = () => {
  return (
    <div className='md:py-10 py-7' id='projects'>
        <h1 className="md:h-20 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-slate-600 to-slate-900 bg-opacity-50">
            Projetos
        </h1>
        <div className='w-full m-auto flex flex-col justify-center'>
            <div className='flex md:flex-row flex-col m-auto md:gap-16'>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gradient-to-br from-slate-800 to-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full mx-5 md:mx-0 md:w-[30rem] h-auto rounded-3xl p-8 md:p-10 border  ">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white"
                        >
                        Rama Global
                        </CardItem>
                        <CardItem
                        as="p"
                        translateZ="60"
                        className="text-gray-100 text-md max-w-sm mt-2 "
                        >
                        Projeto real desenvolvido para uma empresa de consultoria especializada em certificação de selos ecológicos.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/rama-global-project.png"
                            height="1000"
                            width="1000"
                            className="md:h-60 w-full border object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                        </CardItem>
                    </CardBody>
                </CardContainer>
                <Link href="https://www.ramaglobal.company" className='flex md:hidden justify-center' target='_blank'>
                  <Modal>
                      <ModalTrigger className="bg-slate-950 py-3 rounded-full px-8 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                          Ver em Ação
                          </span>
                          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                          <FaExternalLinkAlt />
                          </div>
                      </ModalTrigger>
                  </Modal>
                </Link>
                <div className='md:w-[460px] w-full px-5 md:mx-0'>
                    <div className='md:mt-14 mt-8 text-lg'>
                        <h1 className='font-bold text-xl'>Tecnologias Utilizadas</h1>
                        <div className="flex flex-row items-center justify-center my-6 w-full">
                            <AnimatedTooltip items={tools1} />
                        </div>
                    </div>
                    <div className="md:h-[20rem] md:mt-10 mt-20 flex items-center justify-center w-full">
                        <CardStack items={CARDS1} />
                    </div>
                </div>
            </div>
            <Link href="https://www.ramaglobal.company" className='hidden md:flex justify-center' target='_blank'>
                <Modal>
                    <ModalTrigger className="bg-slate-950 py-3 rounded-full px-8 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                        <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                        Ver em Ação
                        </span>
                        <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <FaExternalLinkAlt />
                        </div>
                    </ModalTrigger>
                </Modal>
            </Link>
            <hr className="mt-12 mb-4 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
            <div className='flex mb-8 md:flex-row md:hidden flex-col m-auto md:gap-16'>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gradient-to-br from-slate-800 to-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full mx-5 md:mx-0 md:w-[30rem] h-auto rounded-3xl p-8 md:p-10 border  ">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white"
                        >
                        Psylogs
                        </CardItem>
                        <CardItem
                        as="p"
                        translateZ="60"
                        className="text-gray-100 text-md max-w-sm mt-2 "
                        >
                        Projeto desenvolvido para o uso de psicólogos, visando a organização e o gerenciamento eficiente dos dados de seus pacientes.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/psylogs-project.png"
                            height="1000"
                            width="1000"
                            className="md:h-60 w-full border object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                        </CardItem>
                    </CardBody>
                </CardContainer>
                <div className='flex justify-center md:gap-10 gap-3'>
                    <Link href="https://www.youtube.com/watch?v=A-0u-8jj_-g" className='flex justify-center md:mb-5' target='_blank'>
                        <Modal>
                            <ModalTrigger className="bg-white border-2 border-black py-[11px] rounded-full px-8 text-black flex justify-center group/modal-btn">
                                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                                Assistir Vídeo
                                </span>
                                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                                <FaExternalLinkAlt className='text-black' />
                                </div>
                            </ModalTrigger>
                        </Modal>
                    </Link>
                    <Link href="https://psylogs.vercel.app/" className='flex justify-center max-h-12' target='_blank'>
                        <Modal>
                            <ModalTrigger className="bg-slate-950 py-3 rounded-full px-8 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                                <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                                Ver em Ação
                                </span>
                                <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                                <FaExternalLinkAlt />
                                </div>
                            </ModalTrigger>
                        </Modal>
                    </Link>
                </div>
                <div className='md:w-[460px] w-full px-5 md:mx-0'>
                    <div className='md:mt-14 mt-8 text-lg'>
                        <h1 className='font-bold text-xl'>Tecnologias Utilizadas</h1>
                        <div className="flex flex-row items-center justify-center my-6 w-full">
                            <AnimatedTooltip items={tools2} />
                        </div>
                    </div>
                    <div className="md:h-[20rem] md:mt-10 mt-20 flex items-center justify-center w-full">
                        <CardStack items={CARDS2} />
                    </div>
                </div>
            </div>
            <div className='hidden md:flex md:flex-row-reverse flex-col m-auto gap-16'>
                <CardContainer className="inter-var">
                    <CardBody className="bg-gradient-to-br from-slate-800 to-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[50%] md:w-[30rem] h-auto rounded-3xl p-10 border  ">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-white"
                        >
                        Psylogs
                        </CardItem>
                        <CardItem
                        as="p"
                        translateZ="60"
                        className="text-gray-100 text-md max-w-sm mt-2 "
                        >
                        Projeto desenvolvido para o uso de psicólogos, visando a organização e o gerenciamento eficiente dos dados de seus pacientes.
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="/psylogs-project.png"
                            height="1000"
                            width="1000"
                            className="h-60 w-full border object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                        </CardItem>
                    </CardBody>
                </CardContainer>
                <div className='md:w-[460px] w-full'>
                    <div className='mt-14 text-lg'>
                        <h1 className='font-bold text-xl'>Tecnologias Utilizadas</h1>
                        <div className="flex flex-row items-center justify-center my-6 w-auto">
                            <AnimatedTooltip items={tools2} />
                        </div>
                    </div>
                    <div className="h-[20rem] mt-10 flex items-center justify-center w-full">
                        <CardStack items={CARDS2} />
                    </div>
                </div>
            </div>
            <div className='hidden md:flex justify-center gap-10'>
                <Link href="https://www.youtube.com/watch?v=A-0u-8jj_-g" className='flex justify-center md:mb-5' target='_blank'>
                    <Modal>
                        <ModalTrigger className="bg-white border-2 border-black py-[11px] rounded-full px-8 text-black flex justify-center group/modal-btn">
                            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                            Assistir Vídeo
                            </span>
                            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                            <FaExternalLinkAlt className='text-black' />
                            </div>
                        </ModalTrigger>
                    </Modal>
                </Link>
                <Link href="https://psylogs.vercel.app/" className='flex justify-center max-h-12' target='_blank'>
                    <Modal>
                        <ModalTrigger className="bg-slate-950 py-3 rounded-full px-8 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
                            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
                            Ver em Ação
                            </span>
                            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                            <FaExternalLinkAlt />
                            </div>
                        </ModalTrigger>
                    </Modal>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Projects