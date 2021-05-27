import React from "react";

const RemoveWeapon = ({
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

     
    

    return(
<div>
<h3>You have removed</h3>
<h2>{Name}</h2>

</div>

    )
}

export default RemoveWeapon