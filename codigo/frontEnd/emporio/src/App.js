import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "./screens/Login/Login.jsx";
import Base from "./screens/BaseScreen/Base";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Base} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;