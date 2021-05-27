import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../scss/App.scss";
import { useHistory } from "react-router";

const Dungeon = () => {
  
  return (
    <div>
<h2>Hey, be careful, it's like, stupid dangerous in there.</h2>

<Link to="/Dungeon1" className="activeNav" className="navLink">
        <img className="image" src="../img/dungeon.jpg" alt="welcomeImage" />
      </Link>


    </div>
  );
};

export default Dungeon;
