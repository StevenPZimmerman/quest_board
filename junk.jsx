import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../scss/App.scss";
import { useHistory } from "react-router";

const Dungeon = () => {
  const [shop, setShop] = React.useState([]);

  React.useEffect(() => {
    fetch("/shop")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

  let shopList = 0;

  const [stats, setStats] = React.useState([]);

  React.useEffect(() => {
    fetch("/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  let silver = [];

  stats.map((stat) => {
    console.log(stat.Currency);
    console.log(silver);
    silver.push(stat.Currency);
  });

  console.log(silver);
  console.log(silver[0]);

  return (
    <div>
      {shop.map((equip) => {
        if (equip.Equipped == 0 && shopList < 4) {
          shopList++;

          return (
            <div
              className="card border-dark mb-3"
              style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem" }}
            >
              <div className="card-body">
                <div className="itemCard">
                  <div className="itemCardInfo">
                    <h3 className="card-title">{equip.InventoryName}</h3>
                    <h5 className="card-title">{equip.Price}</h5>
                    <NavLink
                      to={{
                        pathname:
                          equip.Price <= silver[0]
                            ? "/PurchaseItem"
                            : "/Dungeon",
                        state: { Price: equip.Price, ID: equip.InventoryID },
                      }}
                    >
                      Purchase
                    </NavLink>

                    <p>{equip.InventoryID}</p>
                  </div>
                  <div className="itemCardImage">
                    <img
                      className="image"
                      src={equip.Image}
                      alt={equip.InventoryName}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      <Link to="/Login" className="activeNav" className="navLink">
        <img className="image" src="../img/ManageSign.jpg" alt="welcomeImage" />
      </Link>
    </div>
  );
};

export default Dungeon;



import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../scss/App.scss";
import { useHistory } from "react-router";

const Shop = () => {
  const [shop, setShop] = React.useState([]);

  React.useEffect(() => {
    fetch("/shop")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

  let shopList = 0;

  const [stats, setStats] = React.useState([]);

  React.useEffect(() => {
    fetch("/stats")
      .then((res) => res.json())
      .then((data) => setStats(data));
  }, []);

  let silver = [];

  stats.map((stat) => {
    console.log(stat.Currency);
    console.log(silver);
    silver.push(stat.Currency);
  });

  console.log(silver);
  console.log(silver[0]);

  return (
    <div>
      {shop.map((equip) => {
        if (equip.Equipped == 0 && shopList < 4) {
          shopList++;

          return (
            <div
              className="card border-dark mb-3"
              style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem" }}
            >
              <div className="card-body">
                <div className="itemCard">
                  <div className="itemCardInfo">
                    <h3 className="card-title">{equip.InventoryName}</h3>
                    <h5 className="card-title">{equip.Price}</h5>
                    <NavLink
                      to={{
                        pathname:
                          equip.Price <= silver[0] ? "/PurchaseItem" : "/Shop",
                        state: { Price: equip.Price, ID: equip.InventoryID },
                      }}
                    >
                      Purchase
                    </NavLink>

                    <p>{equip.InventoryID}</p>
                  </div>
                  <div className="itemCardImage">
                    <img
                      className="image"
                      src={equip.Image}
                      alt={equip.InventoryName}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Shop;


import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../scss/App.scss";
import { useHistory } from "react-router";

const Dungeon = () => {
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

  // let equippedGear = [];
  // let inventoryGear = [];

  // {
  //   shop.map((equip) => {
  //     console.log(equip.InventoryName);
  //     if (equip.Equipped == 1) {
  //       inventoryGear.push(equip.InventoryName);
  //     } else if (equip.Equipped == 2) {
  //       equippedGear.push(equip.InventoryName);
  //     }
  //   });
  // }

  // {
  //   shop.map((equip) => {
  //     if (equip.Equipped == 1) {
  //       return <a title="Equip">{equip.InventoryName}</a>;
  //     }
  //   });
  // }

  // {
  //   shop.map((equip) => {
  //     if (equip.Equipped == 2) {
  //       return <a title="Remove">{equip.InventoryName}</a>;
  //     }
  //   });
  // }

  // console.log(equippedGear);
  // console.log(inventoryGear);
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
              return <a title="Remove">{equip.InventoryName}</a>;
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
              return <a title="Equip">{equip.InventoryName}</a>;
            }
          })}
        </div>
        ;
      </div>
    </div>
  );
};

export default Dungeon;
