import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <Router>
    <div>
      <Routes>
          <Route exact path = '/' element= {<Home/>} />
          <Route exact path = '/login' element= {<Login/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
