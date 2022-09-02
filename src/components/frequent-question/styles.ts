import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 54rem;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.xblue};
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 1026px) {
    height: 60rem;
  }
`

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.tertiary.xwhite};
  font-style: normal;
  font-weight: 700;
  line-height: 39px;
  position: relative;
  margin:5rem 0;
`
export const AccordionList = styled.ul`
  width: 50%;
  @media (max-width: 1000px) {
    width: 70%;
  }
`
export const Item = styled.li`
  position: relative;
  &:first-child {
    button {
      border-top: 0.2rem solid ${({ theme }) => theme.colors.tertiary.xcinza};
    }
  }
  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 0;
    background: ${({ theme }) => theme.colors.primary.xblue};
    border: none;
    outline: none;
    transition: 0.3s;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.tertiary.xcinza};

    span {
      color: ${({ theme }) => theme.colors.tertiary.xwhite};
      text-align: left;
    }
    .fa-plus {
      font-size: ${({ theme }) => theme.font.sizes.small};
      transition: 0.2s ease-out;
    }
  }

  .open {
    background-color: none;
    max-height: 0;
    transition: max-height 0.3s ease-out;
    background: ${({ theme }) => theme.colors.tertiary.xwhite};
    will-change: max-height;
  }
  .close {
    background-color: white;
    overflow: hidden;
    transition: 0.3s ease-out;
  }
`

export const ContactIndicate = styled.span`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.tertiary.xwhite};

`


