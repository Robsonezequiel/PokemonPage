import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Lista from "./components/Lista";
import PokemoDados from "./components/PokemoDados";


function App() {
  return (
    <Router className="App">
      <Route exact path="/" component={Lista} />
      <Route path="/:id" component={PokemoDados} />
    </Router>
  );
}

export default App
