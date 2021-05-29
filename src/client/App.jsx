import React from "react";
import "./app.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "./views/Home";
import Character from "./views/Character";
import Shop from "./views/Shop";
import Dungeon from "./views/Dungeon";
import Dungeon1 from "./views/Dungeon1";
import Login from "./views/Login";
import Manager from "./views/Manager";
import Currency from "./views/Currency";
import Documentation from "./views/Documentation";
import QuestComplete from "./views/QuestComplete";
import AllQuestsActive from "./views/AllQuestsActive";
import AllQuestsInactive from "./views/AllQuestsInactive";
import PurchaseItem from "./views/PurchaseItem";
import EquipArmor from "./views/EquipArmor";
import EquipWeapon from "./views/EquipWeapon";
import RemoveArmor from "./views/RemoveArmor";
import RemoveWeapon from "./views/RemoveWeapon";
import AllActiveQuests from "./views/AllActiveQuests";
import AllInactiveQuests from "./views/AllInactiveQuests";
import MakeQuestActive from "./views/MakeQuestActive";
import MakeQuestInactive from "./views/MakeQuestInactive";
import ViewQuest from "./views/ViewQuest";


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

              <Route exact path="/Dungeon1">
                <Dungeon1 />
              </Route>

              <Route exact path="/Login">
                <Login />
              </Route>

              <Route exact path="/Manager">
                <Manager />
              </Route>

              <Route exact path="/Currency">
                <Currency />
              </Route>

              <Route exact path="/Documentation">
                <Documentation />
              </Route>

              <Route exact path="/AllQuestsActive">
                <AllQuestsActive />
              </Route>

              <Route exact path="/AllQuestsInactive">
                <AllQuestsInactive />
              </Route>

              <Route exact path="/AllActiveQuests">
                <AllActiveQuests />
              </Route>

              <Route exact path="/AllInactiveQuests">
                <AllInactiveQuests />
              </Route>

              <Route
                path="/PurchaseItem"
                exact
                component={(props) => {
                  return <PurchaseItem {...props} />;
                }}
              />

              <Route
                path="/EquipArmor"
                exact
                component={(props) => {
                  return <EquipArmor {...props} />;
                }}
              />

              <Route
                path="/EquipWeapon"
                exact
                component={(props) => {
                  return <EquipWeapon {...props} />;
                }}
              />

              <Route
                path="/RemoveArmor"
                exact
                component={(props) => {
                  return <RemoveArmor {...props} />;
                }}
              />

              <Route
                path="/RemoveWeapon"
                exact
                component={(props) => {
                  return <RemoveWeapon {...props} />;
                }}
              />

              <Route
                path="/MakeQuestActive"
                exact
                component={(props) => {
                  return <MakeQuestActive {...props} />;
                }}
              />

              <Route
                path="/MakeQuestInactive"
                exact
                component={(props) => {
                  return <MakeQuestInactive {...props} />;
                }}
              />

              <Route
                path="/ViewQuest"
                exact
                component={(props) => {
                  return <ViewQuest {...props} />;
                }}
              />

              <Route
                path="/QuestComplete"
                exact
                component={(props) => {
                  return <QuestComplete {...props} />;
                }}
              />

              

            </Switch>
          </BrowserRouter>
        </div>
      </header>
    </div>
  );
}

export default App;
