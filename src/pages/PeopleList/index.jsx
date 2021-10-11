import React, { useState, useEffect, useMemo } from 'react'
import { NotificationManager } from 'react-notifications'
import { getPeople, deletePerson } from '../../shared/services/people.service'
import Table from '../../shared/components/Table'
import { useHistory } from 'react-router'
import { Delete, Edit } from '@material-ui/icons';
import styled from 'styled-components'
import { PageContainer, PageTitle } from '../../shared/styles/page.styles'

export default function PeopleList() {
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
            <Table columns={columns} data={data} />
        </PageContainer>
    )
}

const DeleteIcon = styled(Delete)`
    color: red;
    cursor: pointer;
`

const EditIcon = styled(Edit)`
    color: gray;
    cursor: pointer;
`