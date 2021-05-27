import React from "react";
import { useHistory, useParams } from "react-router";

const PurchaseItem = ({
  location: {
    state: { Price, ID },
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
      <h2>Purchased</h2>
    </div>
  );
};

export default PurchaseItem;
