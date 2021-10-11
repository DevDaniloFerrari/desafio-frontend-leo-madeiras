import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PeopleList from '../../pages/PeopleList'
import PersonForm from '../../pages/PersonForm'
import styled from 'styled-components'
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function Content() {
    return (
        <Switch>
            <Container>
                <Route path="/people">
                    <PeopleList />
                </Route>
                <Route path="/addPerson">
                    <PersonForm />
                </Route>
                <Route path="/editPerson/:id">
                    <PersonForm />
                </Route>
                <NotificationContainer />
            </Container>
        </Switch>
    )
}

const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100vh;
    padding-left: 10px;
`