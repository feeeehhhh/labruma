import React from 'react'

import Menu from './componnents/Menu'
import ApresentacaoFts from './componnents/ApresentacaoFts'

import saito from './assets/logo_semBorda.svg'
import ferdezoni from './assets/ferdezoniquali.svg'
import Etica from './componnents/Etica'

function App() {
  return (
    <main className="  space-y-10 text-blue-950 bg-im">
      <Menu />
      <ApresentacaoFts />
      <section>
        <Etica />
        <div
          className="flex flex-col p-8  items-center 
       lg:px-[96px] my-24 lg:my-16 space-y-6 somos "
        >
          <h1 className="text-3xl  font-bold text-amber-950 md:text-3xl">
            QUEM SOMOS
          </h1>
          <div className="md:flex text-lg space-y-6 md:text-2xl md:space-y-0">
            <p className="text-justify md:text-[20px]">
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
        <div
          className="text-center -my-8 mb-20 bg-yellow-200 flex flex-col p-8  items-center 
       lg:px-[96px] lg:my-16 space-y-6 "
        >
          <h1 className="text-3xl text-amber-950  text-center font-bold ">
            NOSSOS PARCEIROS
          </h1>
          <p className="text-lg text-justify md:text-[20px]">
            A Labruma tem o prazer de fornecer seus deliciosos bolos para uma
            variedade de parceiros na região de Franco da Rocha e Caieiras.
            Nossos bolos são entregues com cuidado e dedicação, garantindo a
            satisfação de nossos parceiros e clientes em cada celebração.
          </p>
          <div className="flex justify-center items-center space-x-10 ">
            <img src={saito} alt="Logo Saito Supermercados" className="w-28" />
            <img
              src={ferdezoni}
              alt="Logo Ferdezoni Supermercados"
              className="w-48"
            />
          </div>
        </div>
        <div className="space-y-6  lg:mx-23  lg:ml-20 ">
          <h3 className="text-3xl text-amber-950  text-center font-bold ">
            CONTATO
          </h3>
          <div className=" m-4 lg:flex w-[374px]">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14654.102637703934!2d-46.7553952!3d-23.332963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee38cc8299c13%3A0xf39cb95d3e70aacf!2sLabruma%20Bolos!5e0!3m2!1spt-BR!2sbr!4v1710368552383!5m2!1spt-BR!2sbr"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-xl min-w-[375px] min-h-[240px] md:min-w-[700px] md:min-h-[300px] lg:min-w-[500px] lg:min-h-[400px]"
              ></iframe>
            </div>

            <form className="bg-yellow-300 p-2 space-y-4 rounded-b-xl mb-20 md:space-y-6 lg:mb-44 lg:min-w-[58%] lg:min-h-[400px] lg:rounded-es-2xl">
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
                  className="w-full bg-yellow-100 py-3 rounded-md text-lg md:text-2xl"
                />
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 rounded-md px-3 mx-2">
                <span className="text-blue-950 text-lg md:text-2xl">
                  <ion-icon name="paper-plane"></ion-icon>
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-yellow-100 py-3 rounded-md text-lg md:text-2xl"
                />
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 rounded-md px-3 mx-2">
                <span className="text-blue-950 text-lg  md:text-2xl">
                  <ion-icon name="call"></ion-icon>
                </span>
                <input
                  type="number"
                  placeholder="Telefone"
                  className="w-full bg-yellow-100 py-3 rounded-md text-lg md:text-2xl"
                />
              </div>
              <button className="bg-lime-500 px-2 py-3 rounded-lg font-semibold text-lg mx-2 md:text-2xl md:py-2 ">
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
          <ul className=" flex ">
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
