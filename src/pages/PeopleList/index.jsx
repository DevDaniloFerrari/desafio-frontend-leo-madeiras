import React, { useState, useEffect } from 'react'
import { getPeople, deletePerson } from '../../shared/services/people.service'

export default function PeopleList() {

    const [people, setPeople] = useState([])

    const onDeletePerson = (personId) => {
        deletePerson(personId)
        setPeople(getPeople());
    }

    useEffect(() => {
        setPeople(getPeople());
    }, [])

    return (
        <div>
            {people.map(person => {
                return (
                    <>
                        <p>{person.nome}</p>
                        <button onClick={() => onDeletePerson(person.id)}>Deletar</button>
                    </>
                )
            })}
        </div>
    )
}
