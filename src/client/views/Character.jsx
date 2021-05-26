import React from "react";
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

  

  let equippedGear = [];
  let inventoryGear = [];

  {
    shop.map((equip) => {
      console.log(equip.InventoryName);
      if (equip.Equipped == 1) {
        inventoryGear.push(equip.InventoryName);
      } else if (equip.Equipped == 2) {
        equippedGear.push(equip.InventoryName);
      }
    });
  }

  

  console.log(equippedGear);
  console.log(inventoryGear);

  return (
    <div
      style={{
        backgroundImage: "url(../img/Sheet.png)",
        height: "75vw",
        width: "100vw",
        backgroundRepeat: "no-repeat",
      }}
    >
      {stats.map((stat) => (
        <div className="characterSheet">
          <div className="statBlock">
            <br />
            <br />
            <h5>{stat.CharacterName}</h5>
            <p>Level: {stat.Level} </p>
            <p>XP: {stat.XP} </p>
            <p>HP: {stat.HP} </p>
            <p>Strength: {stat.Strength} </p>
            <p>Speed: {stat.Speed} </p>
            <p>Defense: {stat.Defense} </p>
            <p>Health: {stat.Health} </p>
            <p>Mind: {stat.Mind} </p>
          </div>
          {/* *************** */}
          <div className="equipped">
            <br />
            <br />
            <h5>Equipped</h5>
            {equippedGear.map((item) => {
              return <a title="Remove">{item}</a>;
            })}
          </div>
          {/* ****************** */}
          <div className="inventory">
            <br />
            <br />
            <h5>Inventory</h5>
            <p>Silver: {stat.Currency} </p>
            {inventoryGear.map((item) => {
              return <a title="Equip">{item}</a>;
            })}
          </div>
          ;
        </div>
      ))}
    </div>
  );
};

export default Character;
