import Image from "next/future/image"
import {useKeenSlider} from 'keen-slider/react'

import * as S from "../styles/pages/home"

import camiseta01 from '../assets/02.png'
import camiseta02 from '../assets/03.png'
import camiseta03 from '../assets/04.png'
import camiseta04 from '../assets/05.png'

import 'keen-slider/keen-slider.min.css'
import { GetServerSideProps } from "next"
import { stripe } from "../lib/stripe"
import Stripe from "stripe"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 30,
    }
  })

  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      { products.map((product) => {
        return (
          <S.Product className="keen-slider__slide" key={product.id} >
            <Image src={product.imageUrl} width={520} height={480} alt="" />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </S.Product>
        )
      })}
    </S.HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount / 100,
    }
  })

  return {
    props: {
      products
    }
  }
}