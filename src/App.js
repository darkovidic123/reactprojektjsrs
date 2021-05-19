import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pomocna from "./Components/Pomocna";
import "./App.css";
import Grad from "./Components/Grad";
import Naslovna from "./Components/Naslovna";
import Hiperveza from "./Components/Hiperveza";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Naslovna} />
        <Route  path="/Grad" component={Grad} />
        <Route  path="/Pomocna" component={Pomocna} />
        <Route  path="/Hiperveza" component={Hiperveza} />
      </Router>
    </div>
  );
}