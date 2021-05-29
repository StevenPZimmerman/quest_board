import React from "react";
import { Link, NavLink } from "react-router-dom";
// import sign1 from "./sign1"

const Home = () => {
  const [quests, setQuests] = React.useState([]);

  React.useEffect(() => {
    fetch("/quests")
      .then((res) => res.json())
      .then((data) => setQuests(data));
  }, []);

  return (
    <div className="row">
      {quests.map((quest) => (
        <div
          className="card mb-3 col-md-3 text-center"
          style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem" }}
        >
          <img className="card-img-top" src="../img/poster.png" alt="poster"></img>
          <div className="card-body">
            <div className="card-img-overlay">
            <h3 className="card-title text-center">{quest.QuestGiver}</h3>
            <h5 className="card-title text-center">{quest.QuestName}</h5>
            <p className="card-text text-center">{quest.QuestDescription}</p>
            <p className="card-text text-center">{quest.Bounty} Silver</p>
            <p className="card-text text-center">{quest.Reward} XP</p>
            <NavLink className="text-center"
              to={{
                pathname: "/ViewQuest",
                state: {
                  ID: quest.QuestID,
                  QuestGiver: quest.QuestGiver,
                  QuestName: quest.QuestName,
                  QuestDescription: quest.QuestDescription,
                  Bounty: quest.Bounty,
                  Reward: quest.Reward,
                },
              }}
            >
              View
            </NavLink>
            </div>
          </div>
        </div>
      ))}

      <Link to="/Login" className="activeNav" className="navLink">
        <img className="image" src="../img/ManageSign.jpg" alt="welcomeImage" />
      </Link>
    </div>
  );
};

export default Home;
