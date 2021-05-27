import React from "react";

const RemoveArmor = ({
    location: {
      state: { Name, ID, Description, Image },
    },
  }) => {

    React.useEffect(() => {
        fetch("/RemoveArmor")
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

export default RemoveArmor