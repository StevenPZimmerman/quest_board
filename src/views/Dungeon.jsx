import React from "react";
import { Link } from "react-router-dom";
import "../client/scss/App.scss";

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
    console.log(silver)
    silver.push(stat.Currency)
  });
  
  console.log(silver)
  console.log(silver[0])


 

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
                <h3 className="card-title">{equip.InventoryName}</h3>
                <h5 className="card-title">{equip.Price}</h5>
                <button onClick={() => 
                {if(equip.Price>silver[0]){alert("not enough silver")

                }else{alert("all sales are final")}
              
              }
                
                }>
                  
                  Purchase</button>
                <p>{equip.InventoryID}</p>
              </div>
            </div>
          );
        }
      })}
      <Link to="/Login" ClassName="activeNav" className="navLink">
        <img className="image" src="../img/sign_1.jpg" alt="welcomeImage" />
      </Link>
    </div>
  );
};

export default Dungeon;
