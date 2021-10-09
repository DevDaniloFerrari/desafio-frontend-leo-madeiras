import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PeopleList from '../../pages/PeopleList'
import PersonForm from '../../pages/PersonForm'
import styled from 'styled-components'

export default function Content() {
    return (
        <Switch>
            <Container>
                <Route path="/people">
                    <PeopleList />
                </Route>
                <Route path="/addPeople">
                    <PersonForm />
                </Route>
            </Container>
        </Switch>
    )
}

const Container = styled.div`
    display: flex;
    background: #e6e6e6;
    flex: 1;
    height: 100vh;
    padding-left: 10px;
`