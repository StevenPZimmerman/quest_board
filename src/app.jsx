import React from "react";
import "./app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Character from "./views/Character";
import Shop from "./views/Shop";
import Dungeon from "./views/Dungeon";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <BrowserRouter>
            <div className="navBar">
              <NavBar />
            </div>
            <Switch className="switch">
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/Character">
                <Character />
              </Route>

              <Route exact path="/Shop">
                <Shop />
              </Route>

              <Route exact path="/Dungeon">
                <Dungeon />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App