import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

import bolofund from '../assets/fundoo.jpg'
import logo from '../assets/logolabruma2.svg'

function Menu() {
  
  return (
    <header
      className=" bg-yellow-300 flex justify-between items-center w-full  p-2 md:px-16  lg:px-20  lg:h-[80px]"
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
            className="md:w-48 lg:max-w-44"
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
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <button className="bg-yellow-200 rounded-full p-2 lg:hidden opacity-70 ">
            <HamburgerMenuIcon className=" md:w-10 md:h-10 opacity-100 w-6 h-6" />
          </button>
        </DropdownMenu.Trigger>
      </DropdownMenu.Root>
    </header>
  )
}

export default Menu
