import React from "react";
import { useHistory, useParams } from "react-router";

const PurchaseItem = ({
  location: {
    state: { Price, ID, Name, Image },
  },
}) => {
  // console.log(Price)
  console.log(ID);

  const history = useHistory();

  React.useEffect(() => {
    fetch("/PurchaseItem/" + ID)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    fetch("/PurchaseItemCost/" + Price)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
      <h2>You Have Purchased</h2>
      <h2>{Name}</h2>
      <img
                          className="image"
                          src={Image}
                          alt={Name}
                        />
    </div>
  );
};

export default PurchaseItem;
