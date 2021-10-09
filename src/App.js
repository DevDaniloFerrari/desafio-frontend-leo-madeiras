import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import SideMenu from './shared/components/SideMenu';
import Content from './shared/components/Content';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <SideMenu />
        <Content />
      </div>
    </Router>
  );
}

export default App;
