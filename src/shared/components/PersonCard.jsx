import React from 'react'
import styled from 'styled-components'

export default function PersonCard({ person }) {
    return (
        <Container>
            <Section>
                <SectionItem>
                    <Label>Nome:</Label>
                    {person.nome}
                </SectionItem>
                <SectionItem>
                    <Label>Cpf:</Label>
                    {person.cpf}
                </SectionItem>
                <SectionItem>
                    <Label>Telefone:</Label>
                    {person.telefone}
                </SectionItem>
                <SectionItem>
                    <Label>Email:</Label>
                    {person.email}
                </SectionItem>
            </Section>
            <ActionButtons>
                {person.acoes}
            </ActionButtons>
        </Container>
    )
}

const Container = styled.div`
    border: 1px solid #c9c9c9;
    box-shadow: 0px 2px 2px #c5c5c5;
    height: 200px;
    border-radius: 15px;
    margin-bottom: 15px;
    padding: 10px;
    display: flex;
    flex-direction: column;
`

const Label = styled.div`
    font-weight: bold;
    font-size: 13px;
    margin-right: 10px;
`

const Section = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

const SectionItem = styled.div`
    display: flex;
    flex: 1;
`

const ActionButtons = styled.div`
    align-self: center;
`
