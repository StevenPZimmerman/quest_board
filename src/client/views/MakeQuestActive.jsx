import React from "react";
import { Link, NavLink } from "react-router-dom";

const MakeQuestActive = ({
    location: {
      state: {ID},
    },
  }) => {


  React.useEffect(() => {
    fetch("/questActive/" + ID)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>Quest Active</h2>
    </div>
  );
};

export default MakeQuestActive;
