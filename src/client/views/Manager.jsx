import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Manager = () => {




    return (
        <div>
            <h2 className="text-center">Welcome Quest Manager!</h2>
            <div className="flexColumn">
            <Link to="/Currency" className="activeNav" className="Link">Add or Subtract Currency</Link>
            <Link to="/Documentation" className="activeNav" className="Link">How the System Works</Link>
            </div>
            
<br />
<br />
<h4>Manage Quests</h4>

<div className="flexColumn">

<Link to= "/AllQuestsActive">Make All Quests Active</Link>
<Link to= "/AllQuestsInactive">Make All Quests Inactive</Link>
<Link to= "/AllInactiveQuests">Make Quests Active</Link>
<Link to= "/AllActiveQuests">Make Quests Inactive</Link>
</div>


    


        </div>
    )
}

export default Manager
