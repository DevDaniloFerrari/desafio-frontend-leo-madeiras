import React, { useState, useEffect, useMemo } from 'react'
import { NotificationManager } from 'react-notifications'
import { getPeople, deletePerson } from '../../shared/services/people.service'
import Table from '../../shared/components/Table/Table'
import { useHistory } from 'react-router'
import { PageContainer, PageTitle } from '../../shared/styles/page.styles'
import { useMediaQuery } from 'react-responsive'
import PersonCard from '../../shared/components/PersonCard/PersonCard'
import { DeleteIcon, EditIcon } from './style'

export default function PeopleList() {
    const showTable = useMediaQuery({ query: '(min-width: 794px)' })
    const showCards = useMediaQuery({ query: '(max-width: 794px)' })

    const history = useHistory();
    const [people, setPeople] = useState([])

    const onDeletePerson = (personId) => {
        deletePerson(personId)
        setPeople(getPeople());
        NotificationManager.success('Pessoada deletada!', 'Sucesso', 3000)
    }

    const onEditPerson = (personId) => {
        history.push('editPerson/' + personId)
    }

    useEffect(() => {
        setPeople(getPeople());
    }, [])

    const columns = useMemo(
        () => [
            {
                Header: 'Nome',
                accessor: 'nome',
            },
            {
                Header: 'CPF',
                accessor: 'cpf',
            },
            {
                Header: 'Telefone',
                accessor: 'telefone',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Ações',
                accessor: 'acoes',
            }
        ],
        []
    )

    const data = useMemo(() => people.map(person => ({
        ...person,
        acoes: <>
            <EditIcon onClick={() => onEditPerson(person.id)} />
            <DeleteIcon onClick={() => onDeletePerson(person.id)} />
        </>
    })), [people])

    return (
        <PageContainer>
            <PageTitle>Lista de Pessoas</PageTitle>
            {showTable && <Table columns={columns} data={data} />}
            {showCards && data.map(person => { return <PersonCard person={person} /> })}
        </PageContainer>
    )
}