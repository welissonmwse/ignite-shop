import Link from 'next/link'
import * as S from '../styles/pages/success'

export default function Success() {
  return (
    <S.SuccessContainer>
      <h1>Compra efetuada!</h1>

      <S.ImageContainer>

      </S.ImageContainer>

      <p>
        Uhuul <strong>Welisson</strong>, sua <strong>Camisa Beyond the Limits</strong> ja está a caminho da sua casa.
      </p>
      <Link href="/">
        <a>
          Voltar ao catálago
        </a>
      </Link>
    </S.SuccessContainer>
  )
}