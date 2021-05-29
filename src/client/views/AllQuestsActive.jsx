import React from 'react'
import { Link, NavLink } from "react-router-dom";

const AllQuestsActive = () => {


    React.useEffect(() => {
        fetch("/allQuestsActive")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
          .catch((err) => console.log(err));
      }, []);



    return (
        <div>
            <h2>All Quests Active</h2>
  


        </div>
    )
}

export default AllQuestsActive