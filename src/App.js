import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import UserDetail from './Pages/UserDetail';
import NavBar from './NavBar';
import PrivateRoute from './Utils/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div id='page-body'>
          <Switch>
            <Route path='/' component={Login} exact></Route>
            <PrivateRoute path='/Users' component={Dashboard}></PrivateRoute>
            <PrivateRoute path='/UserDetail/:id' component={UserDetail}></PrivateRoute>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
