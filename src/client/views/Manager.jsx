import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Manager = () => {




    return (
        <div>
            <h2>Welcome Quest Manager!</h2>
            <div className="flexColumn">
            <Link to="/Currency" className="activeNav" className="Link">Add or Subtract Currency</Link>
            <Link to="/Documentation" className="activeNav" className="Link">How the System Works</Link>
            </div>
            
<h4>Manage Quests</h4>
<br />
<br />



        </div>
    )
}

export default Manager
