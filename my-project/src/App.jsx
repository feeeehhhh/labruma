import React, { useState } from 'react'

import Menu from './componnents/Menu'
import ApresentacaoFts from './componnents/ApresentacaoFts'
import { Toaster, toast } from 'sonner'

import saito from './assets/saito.png'
import ferdezoni from './assets/ferdezoniquali.svg'
import Etica from './componnents/Etica'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    const formData = {
      name,
      email,
      phone,
      message,
    }

    try {
      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          accessKey: 'f656a37d-0cf4-4d34-b1fe-caa834ca3e89', // Chave de acesso do seu formulário
        }),
      })

      if (response.ok) {
        setSubmitting(false)
        setSubmitted(true)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
        toast.success('Formulário enviado com sucesso!')
      } else {
        toast.error('Erro ao enviar o formulário')
      }
    } catch (error) {
      console.error('Erro:', error)
      setSubmitting(false)
      toast.error(
        'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.',
      )
    }
  }
  return (
    <main className="  space-y-10 text-blue-950 bg-im">
      <Toaster richColors />
      <Menu />
      <ApresentacaoFts id="inicio" />
      <section>
        <Etica />
        <div
          id="nos"
          className="flex flex-col p-8  items-center 
       lg:px-[96px] -my-16 space-y-6 somos   "
        >
          <h1 className="text-3xl  font-bold text-amber-950 md:text-3xl">
            QUEM SOMOS
          </h1>
          <div className="flex flex-col gap-7 lg:gap-14 text-lg  md:text-2xl md:space-y-0   ">
            <p className="text-justify md:text-[20px] ">
              Somos mais que uma confeitaria; somos uma jornada culinária que
              começou em 2015, impulsionada pela paixão pela arte da
              confeitaria. Cada doce é uma expressão do nosso compromisso com a
              qualidade, feito com ingredientes frescos e uma pitada extra de
              amor.
            </p>
            <p className="text-justify md:text-[20px] ">
              Com uma equipe dedicada e experiente, celebramos não apenas
              sabores excepcionais, mas também os momentos especiais que tornam
              cada criação única. Nosso compromisso com a comunidade local vai
              além do sabor, refletindo-se em eventos, apoio a causas
              importantes e, acima de tudo, na gratidão aos nossos queridos
              clientes, que são a essência do que somos.
            </p>
          </div>
        </div>
        <div
          id="parca"
          className="text-center   mb-20 bg-yellow-200 flex flex-col p-8  items-center 
       lg:px-[96px] my-32 lg:my-40 space-y-6 "
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
          <div className="flex justify-center items-center space-x-3 md:space-x-10">
            <img src={saito} alt="Logo Saito Supermercados" className="w-44" />
            <img
              src={ferdezoni}
              alt="Logo Ferdezoni Supermercados"
              className="w-48"
            />
          </div>
        </div>
        <div id="ctt" className="space-y-12  lg:mx-23  lg:-my-6 lg:mb-40 mx-20">
          <h3 className="text-3xl text-amber-950  text-center font-bold ">
            CONTATO
          </h3>
          <div className="flex flex-col  lg:flex-row  min-w-[370px] md:min-w-[700px] lg:w-full m-4 justify-center lg:m-0">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14654.102637703934!2d-46.7553952!3d-23.332963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cee38cc8299c13%3A0xf39cb95d3e70aacf!2sLabruma%20Bolos!5e0!3m2!1spt-BR!2sbr!4v1710368552383!5m2!1spt-BR!2sbr"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-t-xl w-full  min-h-[240px]  md:min-h-[350px] lg:min-w-[500px] lg:min-h-[490px] lg:rounded-none lg:rounded-s-xl "
              ></iframe>
            </div>

            <form
              className="  bg-yellow-300 p-2 space-y-4 rounded-b-xl mb-10 lg:mb-0 md:space-y-6 lg:mb-44 lg:min-w-[58%] lg:min-h-[400px] lg:rounded-none lg:rounded-r-xl"
              onSubmit={(e) => {
                handleSubmit(e)
              }}
            >
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
                  className="w-full bg-yellow-100 py-3 rounded-md text-lg md:text-2xl border-transparent focus:outline-none"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                  maxLength={40}
                />
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 rounded-md px-3 mx-2">
                <span className="text-blue-950 text-lg md:text-2xl">
                  <ion-icon name="paper-plane"></ion-icon>
                </span>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-yellow-100 py-3 rounded-md text-lg md:text-2xl border-transparent focus:outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  maxLength={40}
                  required
                />
              </div>
              <div className="flex items-center gap-2 bg-yellow-100 rounded-md px-3 mx-2">
                <span className="text-blue-950 text-lg  md:text-2xl">
                  <ion-icon name="call"></ion-icon>
                </span>
                <input
                  type="text"
                  placeholder="Telefone"
                  className="w-full bg-yellow-100 py-3 rounded-md text-lg md:text-2xl border-transparent focus:outline-none"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  title="Digite um número de telefone válido (ex: xx xxxx-xxxx/x)."
                  maxLength={11}
                  required
                />
              </div>
              <div className="px-2">
                <textarea
                  placeholder="Escreva sua menssagem"
                  className="w-full rounded-md min-h-[90px] border-transparent focus:outline-none p-2"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                  maxLength={200}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="bg-lime-500 px-2 py-3 rounded-lg font-semibold text-lg mx-2 md:text-2xl md:py-2 hover:bg-lime-400 hover:text-blue-900"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer
        className="bg-amber-950 text-yellow-50
      "
      >
        <div className="flex mx-4 py-4 justify-between lg:justify-center gap-56">
          <ul className="space-y-4 text-xl font-semibold ">
            <li className="hover:underline">
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
                Início
              </a>
            </li>
            <li className="hover:underline">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  const eticaSection = document.querySelector('#nos')
                  eticaSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                  })
                  const offset = -80 // Valor de compensação para ajustar a posição após a rolagem
                  const topPosition =
                    eticaSection.getBoundingClientRect().top +
                    window.pageYOffset +
                    offset

                  window.scrollTo({ top: topPosition, behavior: 'smooth' })
                }}
              >
                Quem Somos
              </a>
            </li>
            <li className="hover:underline">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  const eticaSection = document.querySelector('#parca')
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
                Parceiros
              </a>
            </li>
            <li className="hover:underline">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  const eticaSection = document.querySelector('#ctt')
                  eticaSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                  })
                  const offset = -90 // Valor de compensação para ajustar a posição após a rolagem
                  const topPosition =
                    eticaSection.getBoundingClientRect().top +
                    window.pageYOffset +
                    offset

                  window.scrollTo({ top: topPosition, behavior: 'smooth' })
                }}
              >
                Contato
              </a>
            </li>
          </ul>
          <div>
            <h3 className="text-xl">Redes Sociais</h3>
            <div className="flex items-center justify-center text-lg p-2 gap-2 font-semibold">
              <span className="h-[25px] text-xl">
                <ion-icon name="logo-facebook"></ion-icon>
              </span>
              <a className="hover:underline" href="">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div
          className="text-center text-yellow-100 p-4
        "
        >
          <p>&copy; 2024 Labruma Bolos. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  )
}

export default App
