import React, { useState } from 'react'
import AddUserSrc from '../../../assets/add-person.png'
import PeopleSrc from '../../../assets/people.png'
import { useHistory } from 'react-router'
import { BottomMenuIcon, Container, Item, MenuTitle } from './style';

export default function BottomMenu() {
    const history = useHistory();

    const [currentPath, setCurrentPath] = useState("/people")

    const goTo = (path) => {
        history.push(path);
        setCurrentPath(path)
    }

    return (
        <Container>
            <BottomMenuItem onClick={() => goTo("/people")} iconSrc={PeopleSrc} title={"Lista de Pessoas"} selected={currentPath === "/people"} />
            <BottomMenuItem onClick={() => goTo("/addPerson")} iconSrc={AddUserSrc} title={"Adicionar Pessoa"} selected={currentPath === "/addPerson"} />
        </Container>
    )
}

const BottomMenuItem = ({ onClick, iconSrc, title, selected }) => {
    return (
        <Item onClick={onClick}>
            <BottomMenuIcon src={iconSrc} />
            <MenuTitle selected={selected}>{title}</MenuTitle>
        </Item>
    )
}