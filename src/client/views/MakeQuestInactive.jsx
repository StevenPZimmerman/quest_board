import React from 'react'
import { Link, NavLink } from "react-router-dom";

const MakeQuestInactive = ({
    location: {
      state: {ID},
    },
  }) => {


    React.useEffect(() => {
        fetch("/questInactive/" + ID)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => console.log(err));
      }, []);



    return (
        <div>
            <h2>Quest Removed</h2>
  


        </div>
    )
}

export default MakeQuestInactive