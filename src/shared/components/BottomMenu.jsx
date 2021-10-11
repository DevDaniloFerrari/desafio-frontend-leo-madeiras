import React, { useState } from 'react'
import styled from 'styled-components'
import AddUserSrc from '../../assets/add-person.png'
import PeopleSrc from '../../assets/people.png'
import { useHistory } from 'react-router'

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

const Container = styled.div`
    display: flex;
    border: 1px solid #E6EBEF;
    justify-content: space-around;
    background: #fafafa;
    bottom: 0;
    position: sticky;
`

const Item = styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
    cursor: pointer;
    text-decoration: none;
    justify-content: center;
    align-items: center;
`;

const MenuTitle = styled.div`
    font-weight: ${({ selected }) => selected ? 600 : 400};
`
const BottomMenuIcon = styled.img.attrs({ draggable: false })
    `
    height: 25px;
    width: 24px;
`;