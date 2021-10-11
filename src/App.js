import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Web from './shared/screens/Web'
import Mobile from './shared/screens/Mobile'

function App() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Router>
      {isDesktopOrLaptop && <Web />}
      {isTabletOrMobile && <Mobile />}
    </Router>
  );
}

export default App;
