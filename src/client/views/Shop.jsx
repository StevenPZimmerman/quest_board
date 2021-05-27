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
