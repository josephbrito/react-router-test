import React from "react";
import "./App.css";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Aulas from "./components/Aulas";
import Sobre from "./components/Sobre";
import { NotF } from "./components/notFound";
import Aula from "./components/Aula";
import Assistir from "./components/Assistir";
import PrivateRoute from "./components/PrivateRoute";
import Negado from "./components/Negado";

import loginReducer from "./reducers/loginReducer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(loginReducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />

            <Route path="/aulas/:id" element={<Aula />} />

            <Route
              path="/aulas"
              element={
                <PrivateRoute>
                  <Aulas />
                </PrivateRoute>
              }
            />

            <Route path="/negado" element={<Negado />} />

            <Route path="/assistir" element={<Assistir />} />

            <Route path="/sobre" element={<Sobre />} />

            <Route path="*" element={<NotF />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
