import React from 'react'
import { ActionButtons, Container, Label, Section, SectionItem } from './style'

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
