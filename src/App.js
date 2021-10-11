import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import SideMenu from './shared/components/SideMenu';
import Content from './shared/components/Content';
import { useMediaQuery } from 'react-responsive'
import BottomMenu from './shared/components/BottomMenu';
import logo from './assets/logo-leo.svg'
import styled from 'styled-components';

function App() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1224px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <Router>
      {isDesktopOrLaptop &&
        <div style={{ display: 'flex' }}>
          <SideMenu />
          <Content />
        </div>
      }
      {isTabletOrMobile &&
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <LogoLeo />
          <Content />
          <BottomMenu />
        </div>
      }
    </Router>
  );
}

const LogoLeo = styled.img.attrs({
  src: logo
})`
  background: #fafafa;
  height: 45px;
  margin-bottom: 10px;
  padding: 5px;
`

export default App;
