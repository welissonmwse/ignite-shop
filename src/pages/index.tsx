import Image from "next/future/image"
import {useKeenSlider} from 'keen-slider/react'

import * as S from "../styles/pages/home"

import camiseta01 from '../assets/02.png'
import camiseta02 from '../assets/03.png'
import camiseta03 from '../assets/04.png'
import camiseta04 from '../assets/05.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 30,
    }
  })

  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      <S.Product className="keen-slider__slide" >
        <Image src={camiseta01} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 69,90</span>
        </footer>
      </S.Product>
      <S.Product className="keen-slider__slide">
        <Image src={camiseta02} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 69,90</span>
        </footer>
      </S.Product>
      <S.Product className="keen-slider__slide">
        <Image src={camiseta03} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 69,90</span>
        </footer>
      </S.Product>
      <S.Product className="keen-slider__slide">
        <Image src={camiseta04} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 69,90</span>
        </footer>
      </S.Product>
    </S.HomeContainer>
  )
}
