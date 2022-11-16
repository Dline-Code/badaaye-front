import type { NextPage } from 'next'
import * as S from './styles'
import LayoutAuthentication from '../../components/layout-authentication'
import { FaGraduationCap } from 'react-icons/fa'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Input from 'src/components/input';

const CadastroEstudantePart2: NextPage = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Form>
          <S.Title>Informações do Parceiro</S.Title>
          <Input Icon={FaGraduationCap} placeholder='Sua especialidade'  type='text'></Input>
          <S.TextArea placeholder='Fale sobre sí e seus objectivos'></S.TextArea>
          <S.Button>Continuar<HiArrowNarrowRight/></S.Button>
        </S.Form>
        <LayoutAuthentication
          title="Encontre o financiamento para os seus estudos"
          description="Conectamos você com os nossos parceiros
          que estão dispostos a financiar os seus estudos."
          link="#"
        />
      </S.Container>
    </S.Wrapper>
  )
}
export default CadastroEstudantePart2;
