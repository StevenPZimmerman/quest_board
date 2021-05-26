<div>
<div>
      {shopA.map((equip) => {
        if (equip.Equipped == 0 && shopListA < 2) {
          shopListA++;

          return (
            <div
              className="card border-dark mb-3"
              style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem" }}
            >
              <div className="card-body">
                <h3 className="card-title">{equip.ArmorName}</h3>
                <h5 className="card-title">{equip.Price}</h5>
                <p>{equip.Equipped}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
    <div>
      {shopW.map((equip) => {
        if (equip.Equipped == 0 && shopListW < 2) {
          shopListW++;

          return (
            <div
              className="card border-dark mb-3"
              style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem" }}
            >
              <div className="card-body">
                <h3 className="card-title">{equip.WeaponName}</h3>
                <h5 className="card-title">{equip.Price}</h5>
                <p>{equip.Equipped}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
</div>