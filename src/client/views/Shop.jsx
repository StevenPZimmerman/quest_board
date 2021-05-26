import React from "react";
import "../scss/App.scss";

const Shop = () => {
  const [shop, setShop] = React.useState([]);
 

  React.useEffect(() => {
    fetch("/shop")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

 

  let shopList = 0;
  

  return (
    
    <div>
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
                
                <p>{equip.Equipped}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
   
</div>
    
  );
};

export default Shop;
