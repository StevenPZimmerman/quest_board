import React from 'react'
import { Link, NavLink } from "react-router-dom";

const AllQuestsInactive = () => {


    React.useEffect(() => {
        fetch("/allQuestsInactive")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => console.log(err));
      }, []);



    return (
        <div>
            <h2>All Quests Inactive</h2>
  


        </div>
    )
}

export default AllQuestsInactive