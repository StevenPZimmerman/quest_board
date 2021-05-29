import React from "react"
import { Link, NavLink } from "react-router-dom";
import "../scss/App.scss";

const ViewQuest = ({
    location: {
      state: { ID, QuestGiver, QuestName, QuestDescription, Bounty, Reward },
    },
  }) => {

return(
<div className="justify-content-around">
    <div
          className="card mb-3 col-md-3 text-center"
          style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem" }}
        >
            <img className="card-img-top" src="../img/poster.png" alt="poster"></img>
          <div className="card-body">
            <div className="card-img-overlay">
        <h3>{QuestGiver}</h3>
        <h4>{QuestName}</h4>
        <h4>{QuestDescription}</h4>
        <h4>{Bounty} Silver</h4>
        <h4>{Reward} XP</h4>
        <br />
        <br />
        <br />
        <br />
        <input type="password" name="enterQC" id="enterQC" placeholder="PIN"/>
        <NavLink  to={{
        pathname: "/QuestComplete",
        state: { ID: ID, Bounty: Bounty, Reward: Reward },
      }}
    >COMPLETE</NavLink>
    </div>
    </div>
    </div>
    </div>
)







}

export default ViewQuest