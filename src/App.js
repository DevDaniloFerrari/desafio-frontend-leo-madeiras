import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import SideMenu from './shared/components/SideMenu';
import { Switch, Route } from 'react-router-dom';
import PeopleList from './pages/PeopleList'
import PersonForm from './pages/PersonForm'

function App() {
  return (
    <Router>
      <SideMenu />
      <Switch>
        <Route path="/people">
          <PeopleList />
        </Route>
        <Route path="/addPeople">
          <PersonForm />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
