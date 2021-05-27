import React from 'react'
import { Link, NavLink } from "react-router-dom";

const AllQuestsActive = () => {


    React.useEffect(() => {
        fetch("/allQuestsActive")
          .then((res) => res.json())
        //   .then((data) => setShop(data));
      }, []);



    return (
        <div>
            <h2>All Quests Active</h2>
  


        </div>
    )
}

export default AllQuestsActive