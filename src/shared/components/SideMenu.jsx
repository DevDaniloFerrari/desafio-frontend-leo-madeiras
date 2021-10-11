import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/logo-leo.svg'
import ArrowRightSrc from '../../assets/arrow-right.png'
import AddUserSrc from '../../assets/add-person.png'
import PeopleSrc from '../../assets/people.png'
import { useHistory } from 'react-router'

export default function SideMenu() {
    const history = useHistory();

    const isSelected = (path) => {
        return history.location.pathname === path
    }

    return (
        <Menu>
            <LogoLeo />
            <SideMenuItem to={"/people"} iconSrc={PeopleSrc} selected={isSelected("/people")} title="Lista de Pessoas" />
            <SideMenuItem to={"/addPerson"} iconSrc={AddUserSrc} selected={isSelected("/addPerson")} title="Adicionar Pessoa" />
        </Menu>
    )
}

const SideMenuItem = ({ to, iconSrc, selected, title }) => {
    return (
        <Item to={to}>
            <SidebarIcon src={iconSrc} />
            <SidebarTitleAndSubtitle>
                <Title selected={selected}>{title}</Title>
            </SidebarTitleAndSubtitle>
            <ArrowRightIcon />
        </Item>
    )
}

const Menu = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: 10px;
`

const LogoLeo = styled.img.attrs({
    src: logo
})`
    height: 80px;
    margin-top: 5px;
    margin-bottom: 20px;
`

const Item = styled(Link)`
    border: 1px solid #E6EBEF;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 27px;
    align-self: stretch;
    height: 70px;
    margin-bottom: 12px;
    cursor: pointer;
    overflow: hidden;
`;

const SidebarIcon = styled.img.attrs({ draggable: false })
    `
    height: 24px;
    width: 24px;
    margin-right: 16px;
`;

const SidebarTitleAndSubtitle = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Title = styled.div`
    font-weight: ${({ selected }) => selected ? 600 : 400};
    font-size: 14px;
    color: #1B1C1D;
`;

const ArrowRightIcon = styled.img.attrs({
    draggable: false,
    src: ArrowRightSrc
})
    `
    height: 16px;
    margin-left: 10px;
`;