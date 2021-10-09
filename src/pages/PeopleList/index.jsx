import React, { useState, useEffect, useMemo } from 'react'
import { NotificationManager } from 'react-notifications'
import { getPeople, deletePerson } from '../../shared/services/people.service'
import Table from '../../shared/components/Table'
import { useHistory } from 'react-router'

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
            <button onClick={() => onEditPerson(person.id)}>Editar</button>
            <button onClick={() => onDeletePerson(person.id)}>Deletar</button>
        </>
    })), [people])

    return (
        <div>
            <h1>Lista de Pessoas</h1>
            <Table columns={columns} data={data} />
        </div>
    )
}
