import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import { FaHammer } from 'react-icons/fa'
import { PiCertificateFill } from 'react-icons/pi'
import Link from 'next/link'
import { BsPeopleFill } from 'react-icons/bs'
import { MdPlace } from 'react-icons/md'
import { IoTime } from 'react-icons/io5'

const Experience = () => {
  return (
    <div className="bg-black/[0.96] md:py-10 py-7" id='experience'>
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 bg-opacity-50">
            Experiência
        </h1>
        <CardContainer className="inter-var">
            <CardBody className="md:w-[960px] w-[93%] bg-gradient-to-br from-gray-50 to-gray-300 relative group/card border-black/[0.1] h-auto rounded-3xl pt-5 md:pt-8 pb-10 border">
                <CardItem
                as="p"
                translateZ="60"
                className="text-slate-700 m-auto text-3xl max-w-sm mt-2"
                >
                <FaHammer />
                </CardItem>
                <CardItem
                translateZ="50"
                className="text-xl font-bold m-auto mt-2 text-slate-950"
                >
                Experiência
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-slate-700 m-auto text-md max-w-sm mt-2 "
                >
                <IoTime className='inline mr-1 -mt-1' />4 meses
                </CardItem>
                <CardItem
                as="div"
                translateZ="60"
                className="text-slate-700 m-auto text-center md:text-left text-md px-7 md:px-12 mt-2 "
                >
                Durante os últimos quatro meses, atuei como freelancer em projetos de desenvolvimento full stack, 
                onde fui responsável por:
                <ul className='flex md:mt-1 mt-3 flex-col md:gap-1 gap-2'>
                  <li>- <b>Desenvolvimento de Aplicações Web</b>: Criação de aplicações utilizando 
                  tecnologias como HTML, CSS, JavaScript, e frameworks como React e Next.js para o 
                  frontend, além de Node.js ou Django para o backend.</li>
                  
                  <li>- <b>Integração de APIs</b>: Implementação e integração de APIs REST
                    para comunicação entre o frontend e o backend.</li>
                  
                  <li>- <b>Banco de Dados</b>: Modelagem e gestão de banco de dados, utilizando SQL 
                    (como MySQL ou PostgreSQL) conforme a necessidade do 
                    projeto.</li>
                  
                  <li>- <b>Colaboração com Clientes</b>: Trabalhei na comunicação com clientes 
                    para exclarecer requisitos, fornecer atualizações de progresso e ajustar 
                    funcionalidades com base em feedback.</li>

                  <li>- <b>Implantação e Manutenção</b>: Experiência na implantação de aplicações em 
                    ambientes de produção e manutenção contínua para otimização de desempenho 
                    e correção de bugs.</li>
                </ul>
                </CardItem>
            </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
            <CardBody className="md:w-[960px] w-[93%] -mt-5 md:-mt-10 bg-gradient-to-br from-gray-50 to-gray-300 relative group/card border-black/[0.1] h-auto rounded-3xl pt-5 pb-7 border">
                <CardItem
                as="p"
                translateZ="60"
                className="text-slate-700 m-auto text-3xl max-w-sm mt-2 "
                >
                <BsPeopleFill />
                </CardItem>
                <CardItem
                translateZ="50"
                className="text-xl font-bold m-auto mt-2 text-slate-950"
                >
                Piscine 42
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-slate-700 m-auto underline text-md max-w-sm mt-2 "
                >
                <Link href="https://42roma.it" target='_blank'><MdPlace className='inline mr-1 -mt-1' />42 Roma Luiss</Link>
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-slate-700 text-center md:text-left m-auto text-md px-7 md:px-12 w-full mt-2 "
                >
                Participei de uma imersão presencial de 340 horas nas linguagens Shell Script e C.
                Durante a '<Link className='underline' href="https://42.fr/en/admissions/42-piscine/">Piscine</Link>', 
                desenvolvi minhas próprias bibliotecas em C, trabalhei em diversos projetos em equipe e troquei feedbacks valiosos com meus colegas. 
                Essa experiência não apenas aprimorou minhas habilidades técnicas, mas também me ajudou a desenvolver
                habilidades interpessoais essenciais, como a comunicação eficaz e a colaboração em grupo.
                </CardItem>
                <CardItem
                as="p"
                translateZ="60"
                className="text-slate-700 m-auto text-center text-[15px] transition-all duration-1000 px-12 w-full mt-4"
                >
                <Link href="https://github.com/GabrielHonegger/piscine-42/" target='_blank'>
                  <button className='border px-4 py-2 hover:bg-black hover:text-white border-black rounded-3xl'>Ver Projetos</button>
                </Link>
                </CardItem>
            </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
              <CardBody className="md:w-[960px] w-[93%] -mt-5 md:-mt-10 bg-gradient-to-br from-gray-50 to-gray-300 relative group/card border-black/[0.1] h-auto rounded-3xl pt-5 pb-7 border  ">
                  <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-700 m-auto text-3xl max-w-sm mt-2 "
                  >
                  <PiCertificateFill />
                  </CardItem>
                  <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-center md:px-0 px-5 m-auto mt-2 text-slate-950"
                  >
                  CS50's Web Programming with Python and JavaScript
                  </CardItem>
                  <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-700 m-auto underline text-md max-w-sm mt-2 "
                  >
                  <Link href="https://pll.harvard.edu/course/cs50s-web-programming-python-and-javascript" target='_blank'>Harvard University</Link>
                  </CardItem>
                  <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-700 text-center md:text-left w-full m-auto text-md mt-2 px-7 md:px-12"
                  >
                  Concluí o programa intensivo de desenvolvimento web (240 horas) oferecido pela Harvard University através da plataforma edX.
                  Durante o curso, adquiri uma sólida base de conhecimento em desenvolvimento web e 
                  desenvolvi habilidades práticas valiosas, como modelagem de bancos de dados, criação de 
                  aplicações escaláveis, implementação de práticas de segurança e melhoria da experiência do 
                  usuário. Este programa me preparou para enfrentar desafios no mundo real de forma dinâmica e 
                  eficaz.
                  </CardItem>
                  <CardItem
                  as="p"
                  translateZ="60"
                  className="text-slate-700 m-auto text-center text-[15px] transition-all duration-1000 px-12 w-full mt-4"
                  >
                  <Link href="https://youtube.com/playlist?list=PLuEet4V9SnrmwoViwos-yjtKeupnvniF5&si=Ub5Bl7w8AncokXQy" target='_blank'>
                    <button className='border px-4 py-2 hover:bg-black hover:text-white border-black rounded-3xl'>Ver Projetos</button>
                  </Link>
                  </CardItem>
              </CardBody>
          </CardContainer>
    </div>
  )
}

export default Experience