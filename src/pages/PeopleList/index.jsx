import React, { useState, useEffect, useMemo } from 'react'
import { NotificationManager } from 'react-notifications'
import { getPeople, deletePerson } from '../../shared/services/people.service'
import Table from '../../shared/components/Table'

export default function PeopleList() {

    const [people, setPeople] = useState([])

    const onDeletePerson = (personId) => {
        deletePerson(personId)
        setPeople(getPeople());
        NotificationManager.success('Pessoada deletada!', 'Sucesso', 3000)
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
            }
        ],
        []
    )

    const data = useMemo(() => people, [people])

    return (
        <div>
            <h1>Lista de Pessoas</h1>
            <Table columns={columns} data={data} />
        </div>
    )
}
