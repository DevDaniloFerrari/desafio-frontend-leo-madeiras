import React from 'react'
import Content from '../../components/Content/Content'
import SideMenu from '../../components/SideMenu/SideMenu'
import { Container } from './style'

export default function DesktopOrLaptop() {
    return (
        <Container>
            <SideMenu />
            <Content />
        </Container>
    )
}
