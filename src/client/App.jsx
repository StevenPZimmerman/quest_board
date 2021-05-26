import React from "react";
import "./app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar"
import Home from "./views/Home";
import Character from "./views/Character";
import Shop from "./views/Shop";
import Dungeon from "./views/Dungeon";
import Login from "./views/Login";
import Manager from "./views/Manager";
import PurchaseItem from "./views/PurchaseItem";

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
              
              <Route exact path="/Login">
                <Login />
              </Route>

              <Route exact path="/Manager">
                <Manager />
              </Route>

              <Route path="/PurchaseItem"
              exact
              component={props => {
                return(
                  <PurchaseItem {...props} />
                );
              }}/>
                <PurchaseItem />
              {/* </Route> */}

            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App