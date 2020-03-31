import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import './App.css';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import WrapMap from './components/Truck/WrapMap';

function App() {

  const [loggedInTest, setLoggedInTest] = useState(false)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/login">
            <Login
              loggedInTest={loggedInTest}
              setLoggedInTest={setLoggedInTest}
            />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          {/* <Route exact path="/"> */}
          {/* <FoodTruck /> */}
          {/* <WrapMap /> */}
          <Route
            exact
            path="/"
            render={() =>
              loggedInTest ? <WrapMap /> : <Redirect to="/login" />
            }
          />
          {/* </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
