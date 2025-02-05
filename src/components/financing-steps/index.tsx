import React, { useEffect } from 'react'
import Link from "next/link"
import * as S from './styles'
import Aos from 'aos'
import { steps } from './mock'

const step: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  })
  return (
    <S.List id='step' data-aos="flip-left">
      <S.Box>
        <S.Container>
          <S.Title>Entenda como a Baadaye funciona</S.Title>
          <Link href="https://play.google.com/">
            <a target="_blank">
              <S.Download className="download">
                ▼ Baixar explicação completa
              </S.Download>
            </a>
          </Link>
        </S.Container>

        {steps.map(item => {
          return (
            <S.Item key={item.id}>
              <S.Step>{item.id}.</S.Step>
              <S.Description>{item.description}</S.Description>
            </S.Item>
          )
        })}
      </S.Box>
    </S.List>
  )
}

export default step
