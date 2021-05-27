import React from "react";

const EquipWeapon = ({
    location: {
      state: { Name, ID, Description, Image },
    },
  }) => {

    React.useEffect(() => {
        fetch("/RemoveWeapon")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => console.log(err));
      }, []);

      React.useEffect(() => {
        fetch("/EquipItem/" + ID)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => console.log(err));
      }, []);
    

    return(
<div>
<h3>You have equipped</h3>
<h2>{Name}</h2>

</div>

    )
}

export default EquipWeapon