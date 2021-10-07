import React, { useState, useEffect } from 'react'
import { getPeople } from '../../shared/services/people.service'

export default function PeopleList() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        setPeople(getPeople());
        console.log(people)
    }, [])

    return (
        <div>
            {people.map(person => {
                return (<p>{person.nome}</p>)
            })}
        </div>
    )
}
