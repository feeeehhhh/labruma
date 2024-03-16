import React from 'react'

import logo from '../assets/logolabruma2.svg'
import Container from './Container'

function Etica() {
  return (
    <div className="flex  flex-col items-center  my-24 lg:my-36      bg-yellow-200  py-3 text-center md:text-2xl">
      <img src={logo} alt="" width={190} />
      <div
        id="etica"
        className="md:text-[20px] md:text-balance py-4 lg:flex md:p-10 lg:p-15 minha-etica space-y-4 lg:space-y-0  "
      >
        <div>
          <h3 className="text-[22px] font-semibold md:text-3xl text-amber-950 ">
            Missão
          </h3>
          <p>
            Oferecer produtos exclusivos para toda e qualquer celebração da
            vida. Os produtos que unem beleza e sabor, e se mantém consistente
            ao longo dos anos.
          </p>
        </div>
        <div>
          <h3 className="text-[22px] font-semibold md:text-3xl text-amber-950">
            Visão
          </h3>
          <p>
            Proporcionar um portfólio democrático, oferecendo experiências que
            lhe tragam memórias afetivas..
          </p>
        </div>
        <div>
          <h3 className="text-[22px] font-semibold md:text-3xl text-amber-950">
            Valores
          </h3>
          <p>
            Valorização do ser humano com respeito e ética; Oferecer um
            portfólio de produtos de qualidade que se tornem tendências; Inovar
            para encantar, sempre!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Etica
