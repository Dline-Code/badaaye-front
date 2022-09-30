import React from 'react'
import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'
import { LayoutProps } from './type'
import { HiArrowNarrowLeft } from 'react-icons/hi'

const layoutAuthentication: React.FC<LayoutProps> = ({
  title,
  description,
  link,
  children,
  linkDescription
}) => {
  return (
    <S.Wrapper>
      <Image
        src="/logo-baadaye.svg"
        alt="Picture of the author"
        width={115}
        height={90}
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>

      <S.ContainerSelect>{children}</S.ContainerSelect>
      <Link href="">
        <S.Text>
          <HiArrowNarrowLeft />
          <S.LinkDescription>{linkDescription}</S.LinkDescription>
        </S.Text>
      </Link>
    </S.Wrapper>
  )
}

export default layoutAuthentication
