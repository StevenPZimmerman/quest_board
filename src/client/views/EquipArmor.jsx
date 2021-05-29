import React from "react";

const EquipArmor = ({
    location: {
      state: { Name, ID, Description, Image },
    },
  }) => {

    React.useEffect(() => {
        fetch("/RemoveArmor")
          .then((res) => res.json())
          .then((data) => {
            console.log(data); fetch("/EquipItem/" + ID)
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }, []);

    //   React.useEffect(() => {
    //     fetch("/EquipItem/" + ID)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //       })
    //       .catch((err) => console.log(err));
    //   }, []);
    

    return(
<div
          className="card border-dark mb-3 flex-center"
          style={{ width: "12rem", marginTop: "2rem", marginLeft: "2rem" }}>
<h3>You have equipped</h3>
<h2>{Name}</h2>
<img className="image" src={Image} alt="armorImage" />
<h3>{Description}</h3>
</div>
    )
}

export default EquipArmor