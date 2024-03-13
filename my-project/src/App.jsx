import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import logo from './assets/logolabruma2.svg'
import img01 from './assets/bolo01jpg.jpg'
import img02 from './assets/bolo02.jpg'
import img03 from './assets/bolo03.jpg'
import img05 from './assets/bolo05.jpg'
import img06 from './assets/bolo06.jpg'
import bolofund from './assets/fundoo.jpg'

const slides = [img06, img05, img02, img03, img01]
function App() {
  const carrosel = useRef()
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current.offsetWidth)
  }, [])
  return (
    <main className="  space-y-10 text-blue-950 bg-im">
      <header
        className=" bg-yellow-300 flex justify-between items-center w-full  p-2 md:px-16  lg:px-20 fixed top-0 z-50 lg:h-[80px]"
        style={{
          backgroundImage: `url(${bolofund})`,
          backgroundRepeat: 'repeat',
          margin: '0 0 30px 0',
        }}
      >
        <div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              const eticaSection = document.querySelector('body')
              eticaSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              })
            }}
          >
            <img
              className="md:w-56"
              src={logo}
              alt="Logo Labruma"
              width={150}
              className="lg:max-h-20"
            />
          </a>
        </div>
        <div className="font-semibold space-x-16 ml-auto text-[24px] flex relative hidden lg:inline-block">
          <a
            className="transition-transform transform hover:scale-110 lg:inline-block hover:rounded-md hover:px-2 hover:text-amber-800"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              const eticaSection = document.querySelector('.minha-etica')
              eticaSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              })
              const offset = -260 // Valor de compensação para ajustar a posição após a rolagem
              const topPosition =
                eticaSection.getBoundingClientRect().top +
                window.pageYOffset +
                offset

              window.scrollTo({ top: topPosition, behavior: 'smooth' })
            }}
          >
            Nossa Ética
          </a>
          <a
            className="transition-transform transform hover:scale-110 lg:inline-block hover:rounded-md hover:px-2 hover:text-amber-800"
            href="#"
            onClick={(e) => {
              e.preventDefault()
              const eticaSection = document.querySelector('.somos')
              eticaSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
              })
              const offset = -140 // Valor de compensação para ajustar a posição após a rolagem
              const topPosition =
                eticaSection.getBoundingClientRect().top +
                window.pageYOffset +
                offset

              window.scrollTo({ top: topPosition, behavior: 'smooth' })
            }}
          >
            Quem Somos
          </a>
          <a
            className="transition-transform transform hover:scale-110 lg:inline-block hover:rounded-md hover:px-2 hover:text-amber-800"
            href="#"
          >
            Contato
          </a>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <button className="bg-yellow-200 rounded-full p-2 lg:hidden opacity-70 mr-2">
              <HamburgerMenuIcon className=" md:w-10 md:h-10 opacity-100 w-6 h-6" />
            </button>
          </DropdownMenu.Trigger>
        </DropdownMenu.Root>
      </header>
      <section className="  mx-1">
        <div className="items-center flex flex-col">
          <motion.div
            className="my-16 md:my-24 "
            initial={{ x: 100 }}
            animate={{ x: 0 }}
          >
            <h1 className="font-bold text-3xl leading-10 text-amber-950 text-center  p-1 uppercase md:text-4xl ">
              Labruma Bolos
            </h1>
            <p className="mx-4 text-center py-6 text-xl md:w-[600px] md:py-3 md:text-[23px] lg:w-[700px]">
              "Bem-vindo à nossa confeitaria, onde a doçura vai além do paladar,
              é uma experiência que compartilhamos com você desde 2015."
            </p>
          </motion.div>
          <div className="max-w-[330px] md:max-w-[600px] lg:max-w-[900px] -my-16">
            <motion.div
              ref={carrosel}
              className="overflow-hidden cursor-grab"
              whileTap={{ cursor: ' grabbing ' }}
            >
              <motion.div
                className="flex"
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                initial={{ x: 100 }}
                animate={{ x: 0 }}
              >
                {slides.map((img) => (
                  <motion.div
                    className="min-w-[350px]  p-2 pointer-events-none"
                    key={1}
                  >
                    <img
                      className="w-full h-4/6 rounded-xl"
                      src={img}
                      alt="Images"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="flex  flex-col items-center -m-12 md:m-0     bg-yellow-200  py-3 text-center md:text-2xl">
          <img src={logo} alt="" width={190} />
          <div
            id="etica"
            className="md:text-[26px] md:text-balance px-16 py-4 lg:flex md:p-10 lg:p-20 minha-etica space-y-4 lg:space-y-0 lg:-gap-3"
          >
            <div>
              <h3 className="text-[22px] font-semibold md:text-3xl text-amber-950 ">
                Missão
              </h3>
              <p>
                Oferecer produtos exclusivos para toda e qualquer celebração da
                vida. Os produtos que unem beleza e sabor, e se mantém
                consistente ao longo dos anos.
              </p>
            </div>
            <div>
              <h3 className="text-[22px] font-semibold md:text-3xl text-amber-950">
                Visão
              </h3>
              <p>
                Proporcionar um portfólio democrático, oferecendo experiências
                que lhe tragam memórias afetivas..
              </p>
            </div>
            <div>
              <h3 className="text-[22px] font-semibold md:text-3xl text-amber-950">
                Valores
              </h3>
              <p>
                Valorização do ser humano com respeito e ética; Oferecer um
                portfólio de produtos de qualidade que se tornem tendências;
                Inovar para encantar, sempre!
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col p-8  items-center 
       lg:px-[96px] my-24 lg:my-16 space-y-6 somos "
        >
          <h1 className="text-3xl  font-bold text-amber-950 md:text-4xl">
            QUEM SOMOS
          </h1>
          <div className="md:flex text-lg space-y-6 md:text-2xl md:space-y-0">
            <p className="text-justify md:text-[28px]">
              Somos mais que uma confeitaria; somos uma jornada culinária que
              começou em 2015, impulsionada pela paixão pela arte da
              confeitaria. Cada doce é uma expressão do nosso compromisso com a
              qualidade, feito com ingredientes frescos e uma pitada extra de
              amor. <br /> <br /> Com uma equipe dedicada e experiente,
              celebramos não apenas sabores excepcionais, mas também os momentos
              especiais que tornam cada criação única. Nosso compromisso com a
              comunidade local vai além do sabor, refletindo-se em eventos,
              apoio a causas importantes e, acima de tudo, na gratidão aos
              nossos queridos clientes, que são a essência do que somos.
            </p>
          </div>
        </div>
        <div className="space-y-3 -my-20 lg:mx-20 ">
          <h3 className="text-3xl text-amber-950  text-center font-bold ">
            CONTATO
          </h3>
          <div className="p-4 lg:flex ">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3701.643542337437!2d-46.75688900142531!3d-23.334536172719304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1710201856002!5m2!1spt-BR!2sbr"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-xl min-w-[340px] min-h-[200px] md:min-w-[700px] md:min-h-[300px] lg:min-w-[500px] lg:min-h-[400px]"
              ></iframe>
            </div>

            <form className="bg-yellow-300 p-2 space-y-2 rounded-b-xl mb-20 md:space-y-6 lg:mb-44 lg:min-w-[58%] lg:min-h-[400px] lg:rounded-es-2xl">
              <h3 className="text-center font-bold text-amber-950 text-lg md:text-2xl md:my-3">
                ENTRAR EM CONTATO
              </h3>
              <div className="flex items-center gap-2 bg-yellow-100 rounded-md px-3 mx-2">
                <span className="text-blue-950 text-lg md:text-2xl">
                  <ion-icon name="person"></ion-icon>
                </span>
                <input
                  type="text"
                  placeholder="Nome"
                  className="w-full bg-yellow-100 py-2 rounded-md text-lg md:text-2xl"
                />
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 rounded-md px-3 mx-2">
                <span className="text-blue-950 text-lg md:text-2xl">
                  <ion-icon name="paper-plane"></ion-icon>
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-yellow-100 py-2 rounded-md text-lg md:text-2xl"
                />
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 rounded-md px-3 mx-2">
                <span className="text-blue-950 text-lg  md:text-2xl">
                  <ion-icon name="call"></ion-icon>
                </span>
                <input
                  type="number"
                  placeholder="Telefone"
                  className="w-full bg-yellow-100 py-2 rounded-md text-lg md:text-2xl"
                />
              </div>
              <button className="bg-green-300 px-2 py-1 rounded-lg font-semibold text-lg mx-2 md:text-2xl md:py-2">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer
        className="bg-amber-950 text-white
      "
      >
        <div className="">
          <ul className="flex justify-between py-10 px-40">
            <li className="space-y-4">
              <p>(11)99999-9999</p>
              <p>(11)3099-9999</p>
            </li>

            <li className="space-y-4">
              <p>
                Rua tananana,157, Pituba <br />
                CEP 07717-111.Caieiras -SP
              </p>
              <p>indorpac011@gmail.com</p>
            </li>

            <li className="max-w-40">
              <p>
                Domingo das 08h30 às 16h Segunda a Quinta das 08h30 às 18h30
                Sexta das 08h30 às 18h Sábado das 08h30 às 17h30
              </p>
            </li>
          </ul>
          <h1 className="text-center pb-2">
            2024@Todos os direitos reservados
          </h1>
        </div>
      </footer>
    </main>
  )
}

export default App
