import './App.css';
import { Welcome } from './views/welcome/welcome';
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import { Home } from './views/home/home';
import { Header } from './global/header/header';
import RoutesApp from './routes';

function App() {

  return (
    <div className="App">
      <Router>
       <Routes>
        <Route exact path={'/'} element={<Welcome/>}/>
        <Route exact path={'/patients'} element={<Home />} />
       </Routes>
      </Router>
    </div>
  );
}

export default App;
