import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'
import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

import img01 from '../assets/bolosslides/bolo01jpg_resized.jpg'
import img02 from '../assets/bolosslides/bolo02_resized.jpg'
import img03 from '../assets/bolosslides/bolo03_resized.jpg'
import img04 from '../assets/bolosslides/bolo.04jpg.jpg'
import img05 from '../assets/bolosslides/bolo05_resized.jpg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './Apresentacao.css'

register()

const slides = [
  { id: '1', image: img01 },
  { id: '2', image: img02 },
  { id: '3', image: img03 },
  { id: '4', image: img04 },
  { id: '5', image: img05 },
]

function ApresentacaoFts() {
  const [slidesPerView, setSlidePerView] = useState(2)

  useEffect(() => {
    if (window.innerWidth < 720) {
      setSlidePerView(1)
    } else {
      setSlidePerView(2)
    }
  })
  return (
    <div
      className="items-center flex flex-col space-y-2 my-10 
    "
    >
      <motion.div
        className=" md:my-16  "
        initial={{ x: 100 }}
        animate={{ x: 0 }}
      >
        <h1 className="font-bold text-4xl leading-10 text-amber-950 text-center   uppercase md:text-5xl md:rounded-r-none">
          Labruma Bolos
        </h1>
        <p className="mx-4 text-center py-6 text-xl md:w-[600px] md:py-3 md:text-[20px] lg:w-[700px] ">
          "Bem-vindo à nossa confeitaria, onde a doçura vai além do paladar, é
          uma experiência que compartilhamos com você desde 2015."
        </p>
      </motion.div>
      <div className="max-w-[350px] md:max-w-[750px] lg:min-w-[1000px] mb-28 flex ">
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{ clickable: true }}
          navigation
          style={{ zIndex: 0 }}
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="mx-4 ">
                <img
                  src={item.image}
                  alt="Slider"
                  className="w-full  object-cover rounded-xl  "
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default ApresentacaoFts
