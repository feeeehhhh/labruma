import React, { useState } from 'react'

import { ChevronFirst } from 'lucide-react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import bolofund from '../assets/fundoo.jpg'
import logo from '../assets/logolabruma2.svg'

function Menu() {
  const [sidebar, setSidebar] = useState(false)

  function toggleSidebar() {
    setSidebar(!sidebar) // Altera o estado de sidebar para o opostoa do estado atual
  }
  return (
    <header>
      <div className="lg:hidden  flex justify-between  " id="header">
        <button onClick={toggleSidebar} className="cursor-pointer p-4">
          <HamburgerMenuIcon className="w-12 h-12 text-yellow-500" />
        </button>
        <div
          className="absolute flex flex-col  bg-yellow-200  min-w-[35vw] p-4 min-h-[200px] rounded-br-3xl
          "
          id="navigation"
          style={{
            marginLeft: sidebar ? '0' : '-100vw', // Aplica o estilo de acordo com o estado da sidebar
            transition: 'margin-left 1s', // Adiciona uma transição suave
          }}
        >
          <div>
            <div className="flex gap-8">
              <img src={logo} alt="" className="w-28" />
              <button onClick={toggleSidebar}>
                <ChevronFirst className="w-12 h-12 text-yellow-600" />
              </button>
            </div>

            <div
              className="flex flex-col text-xl my-8 space-y-4
          "
            >
              <a
                className="active:bg-yellow-300 py-2 px-2  active:rounded-md  active:text-amber-800"
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
                className="active:bg-yellow-300 py-2 px-2  active:rounded-md  active:text-amber-800"
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
                className="active:bg-yellow-300 py-2 px-2  active:rounded-md  active:text-amber-800"
                href="#"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" hidden md:block bg-yellow-300 lg:flex lg:justify-between items-center w-full  p-2 md:px-16  lg:px-20  lg:h-[80px]"
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
              const offset = -260 // Valor de compensação para ajustar a posição após a rolagem
              const topPosition =
                eticaSection.getBoundingClientRect().top +
                window.pageYOffset +
                offset

              window.scrollTo({ top: topPosition, behavior: 'smooth' })
            }}
          >
            <img
              className="md:w-48 lg:max-w-44 mx-2"
              src={logo}
              alt="Logo Labruma"
              width={150}
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
      </div>
    </header>
  )
}

export default Menu
