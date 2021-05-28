import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/home";
import ContactUs from "./components/pages/contactus";
import Services from "./components/pages/services";
import SignUp from "./components/pages/signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" exact component={ContactUs}></Route>
          <Route path="/services" exact component={Services}></Route>
          <Route path="/packages" exact component={SignUp}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
