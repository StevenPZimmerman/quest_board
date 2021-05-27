import React from 'react'
import { Link, NavLink } from "react-router-dom";

const AllQuestsInactive = () => {


    React.useEffect(() => {
        fetch("/allQuestsInactive")
          .then((res) => res.json())
        //   .then((data) => setShop(data));
      }, []);



    return (
        <div>
            <h2>All Quests Inactive</h2>
  


        </div>
    )
}

export default AllQuestsInactive