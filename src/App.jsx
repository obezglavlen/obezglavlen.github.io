import NavBar from './components/NavBar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Downloads from './pages/Downloads';

const navItems = [
  {
    title: 'Home',
    to: '/',
    icon: 'fa fa-Home',
  },
  {
    title: 'Downloads',
    to: '/downloads',
    icon: 'fa fa-arrow-circle-down',
  },
  {
    title: 'Information',
    to: '/info',
    icon: 'fa fa-info-circle',
  },
];

const App = () => (
  <>
    <NavBar items={navItems}>
      <a href="https://github.com/obezglavlen" target="_blank" rel="noreferrer">
        <img src="/assets/img/github_mark.svg" alt="github"/>
      </a>
    </NavBar>
    <Routes>
      <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="downloads/*" element={<Downloads/>}/>
        <Route path="2" element={<main>
          <div>Empty</div>
        </main>}/>
      </Route>
    </Routes>
  </>
);

export default App;
