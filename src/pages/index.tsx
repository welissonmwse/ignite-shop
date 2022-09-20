import * as S from "../styles/pages/home"

import camiseta01 from '../assets/02.png'
import camiseta02 from '../assets/03.png'
import camiseta03 from '../assets/04.png'
import camiseta04 from '../assets/05.png'
import Image from "next/future/image"

export default function Home() {
  return (
    <S.HomeContainer>
      <S.Product >
        <Image src={camiseta01} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 69,90</span>
        </footer>
      </S.Product>
      <S.Product >
        <Image src={camiseta02} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 69,90</span>
        </footer>
      </S.Product>
    </S.HomeContainer>
  )
}
