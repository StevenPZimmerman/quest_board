import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/App.scss";

const Character = () => {
  const [stats, setStats] = React.useState([]);

  React.useEffect(() => {
    fetch("/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  const [shop, setShop] = React.useState([]);

  React.useEffect(() => {
    fetch("/shop")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

  let characterStats = [];

  {
    stats.map((stat) => {
      characterStats.push(stat.CharacterName);
      characterStats.push(stat.Currency);
      characterStats.push(stat.Level);
      characterStats.push(stat.XP);
      characterStats.push(stat.HP);
      characterStats.push(stat.Strength);
      characterStats.push(stat.Speed);
      characterStats.push(stat.Defense);
      characterStats.push(stat.Health);
      characterStats.push(stat.Mind);
    });
  }


  console.log(characterStats);

  return (
    <div
      style={{
        backgroundImage: "url(../img/Sheet.png)",
        height: "75vw",
        width: "100vw",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="characterSheet">
        <div className="statBlock">
          <br />
          <br />
          <h5>{characterStats[0]}</h5>
          <p>Level: {characterStats[2]} </p>
          <p>XP: {characterStats[3]} </p>
          <p>HP: {characterStats[4]} </p>
          <p>Strength: {characterStats[5]} </p>
          <p>Speed: {characterStats[6]} </p>
          <p>Defense: {characterStats[7]} </p>
          <p>Health: {characterStats[8]} </p>
          <p>Mind: {characterStats[9]} </p>
        </div>
        {/* *************** */}
        <div className="equipped">
          <br />
          <br />
          <h5>Equipped</h5>
          {shop.map((equip) => {
            if (equip.Equipped == 2) {
              return <NavLink className="inventoryLinks" to={{
                pathname:
                equip.InventoryID % 2 == 0 ? "/RemoveArmor" : "/RemoveWeapon",
                state: { Name: equip.InventoryName, ID: equip.InventoryID, Description: equip.Description, Image: equip.Image },
              }}
            >{equip.InventoryName}</NavLink>;
            }
          })}
        </div>
        {/* ****************** */}
        <div className="inventory">
          <br />
          <br />
          <h5>Inventory</h5>
          <p>Silver: {characterStats[1]} </p>
          {shop.map((equip) => {
            if (equip.Equipped == 1) {
              return <NavLink className="inventoryLinks" to={{
                pathname:
                equip.InventoryID % 2 == 0 ? "/EquipArmor" : "/EquipWeapon",
                state: { Name: equip.InventoryName, ID: equip.InventoryID, Description: equip.Description, Image: equip.Image },
              }}
            >{equip.InventoryName}</NavLink>;
            }
          })}
        </div>
        ;
      </div>
    </div>
  );
};

export default Character;
