import React from 'react'
import { Link, NavLink } from "react-router-dom";

const AllInactiveQuests = () => {
    const [quests, setQuests] = React.useState([]);

    React.useEffect(() => {
        fetch("/inactiveQuests")
          .then((res) => res.json())
          .then((data) => setQuests(data));
      }, []);



    return (
        <div>
             {quests.map((quest) => (
        
        <div
          className="card border-dark mb-3 flex-wrap" 
          style={{ width: "12rem", marginTop: "2rem", marginLeft: "2rem" }}
        >
          <div className="card-body">
            <h3 className="card-title">{quest.QuestGiver}</h3>
            <h5 className="card-title">{quest.QuestName}</h5>
            <p className="card-text">{quest.QuestDescription}</p>
            <p className="card-text">{quest.Bounty} Silver</p>
            <p className="card-text">{quest.Reward} XP</p>
            <NavLink  to={{
                pathname: "/MakeQuestActive",
                state: { ID: quest.QuestID },
              }}
            >Add</NavLink>
          </div>
        </div>
      
    ))}
  


        </div>
    )
}

export default AllInactiveQuests