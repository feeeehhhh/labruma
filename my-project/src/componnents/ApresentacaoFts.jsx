import React, { useState, useEffect, useRef } from 'react'

import { motion } from 'framer-motion'
import { register } from 'swiper/element/bundle'

import img01 from '../assets/bolo01jpg.jpg'
import img02 from '../assets/bolo02.jpg'
import img03 from '../assets/bolo03.jpg'
import img05 from '../assets/bolo05.jpg'
import img06 from '../assets/bolo06.jpg'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

register()

const slides = [img06, img05, img02, img03, img01]

function ApresentacaoFts() {
  const carrosel = useRef()
  const [width, setWidth] = useState(0)
  useEffect(() => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current.offsetWidth)
  }, [])
  return (
    <div className="items-center flex flex-col">
      <motion.div
        className="my-16 md:my-24 "
        initial={{ x: 100 }}
        animate={{ x: 0 }}
      >
        <h1 className="font-bold text-4xl leading-10 text-amber-950 text-center   uppercase md:text-5xl ">
          Labruma Bolos
        </h1>
        <p className="mx-4 text-center py-6 text-xl md:w-[600px] md:py-3 md:text-[20px] lg:w-[700px]">
          "Bem-vindo à nossa confeitaria, onde a doçura vai além do paladar, é
          uma experiência que compartilhamos com você desde 2015."
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
            animate={{ x: 0 }}
          >
            {slides.map((img) => (
              <motion.div
                className="min-w-[350px]  p-2 pointer-events-none"
                key={img}
              >
                <motion.img
                  className="w-full h-4/6 rounded-xl"
                  src={img}
                  alt="Images"
                  drag="x"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default ApresentacaoFts
