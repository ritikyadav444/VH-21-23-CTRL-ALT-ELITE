import logo from './logo.svg';
import './App.css';

import Navbar from './component/Navbar';
import Login from './component/Login';
import Sign from './component/Sign';
import Upload from './component/Upload';
// import { Router } from 'react-router';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/login" component = {Login} />
        <Route exact path="/Upload" component = {Upload} />
        <Route exact path="/Sign" component = {Sign} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
