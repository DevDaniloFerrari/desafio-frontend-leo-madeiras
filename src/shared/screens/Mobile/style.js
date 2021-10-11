import logo from '../../../assets/logo-leo.svg'
import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh;
`

export const LogoLeo = styled.img.attrs({
    src: logo
})
`
    top: 0;
    position: sticky;
    background: #fafafa;
    height: 45px;
    margin-bottom: 10px;
    padding: 5px;
  `