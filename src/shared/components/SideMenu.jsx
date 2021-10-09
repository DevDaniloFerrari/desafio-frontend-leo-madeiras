import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo-leo.svg'

export default function SideMenu() {
    return (
        <Menu>
            <LogoLeo />
            <Item to="/people">Pessoas</Item>
            <Item to="/addPeople">Nova Pessoa</Item>
        </Menu>
    )
}

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
`

const Item = styled(Link)`
    text-decoration: none;
    margin-left: 5px;
    margin-top: 10px;
`

const LogoLeo = styled.img.attrs({
    src: logo
})`
    height: 80px;
    margin-top: 5px;
    margin-bottom: 20px;
`