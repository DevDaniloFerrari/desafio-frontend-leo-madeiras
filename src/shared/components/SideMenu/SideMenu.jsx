import React, { useState } from 'react'
import AddUserSrc from '../../../assets/add-person.png'
import PeopleSrc from '../../../assets/people.png'
import { useHistory } from 'react-router'
import { ArrowRightIcon, Item, LogoLeo, Menu, SidebarIcon, SidebarTitleAndSubtitle, Title } from './style';

export default function SideMenu() {
    const history = useHistory();

    const [currentPath, setCurrentPath] = useState("/people")

    const goTo = (path) => {
        history.push(path);
        setCurrentPath(path)
    }

    return (
        <Menu>
            <LogoLeo />
            <SideMenuItem onClick={() => goTo("/people")} iconSrc={PeopleSrc} selected={currentPath === "/people"} title="Lista de Pessoas" />
            <SideMenuItem onClick={() => goTo("/addPerson")} iconSrc={AddUserSrc} selected={currentPath === "/addPerson"} title="Adicionar Pessoa" />
        </Menu>
    )
}

const SideMenuItem = ({ onClick, iconSrc, selected, title }) => {
    return (
        <Item onClick={onClick}>
            <SidebarIcon src={iconSrc} />
            <SidebarTitleAndSubtitle>
                <Title selected={selected}>{title}</Title>
            </SidebarTitleAndSubtitle>
            <ArrowRightIcon />
        </Item>
    )
}