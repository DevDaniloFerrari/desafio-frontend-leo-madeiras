import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import PeopleList from '../../../pages/PeopleList'
import PersonForm from '../../../pages/PersonForm'
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function Content() {
    return (
        <Switch>
            <Container>
                <Route exact path="/"><Redirect to="/people" /></Route>
                <Route path="/people"><PeopleList /></Route>
                <Route path="/addPerson"><PersonForm /></Route>
                <Route path="/editPerson/:id"><PersonForm /></Route>
                <NotificationContainer />
            </Container>
        </Switch>
    )
}

