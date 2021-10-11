import React from 'react'
import BottomMenu from '../../components/BottomMenu/BottomMenu'
import Content from '../../components/Content/Content'
import { Container, LogoLeo } from './style'

export default function TabletOrMobile() {
  return (
    <Container>
      <LogoLeo />
      <Content />
      <BottomMenu />
    </Container>
  )
}
