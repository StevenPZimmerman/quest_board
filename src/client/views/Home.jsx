import React from "react";
// import sign1 from "./sign1"

const Home = () => {
  const [quests, setQuests] = React.useState([]);

  React.useEffect(() => {
    fetch("/quests")
      .then((res) => res.json())
      .then((data) => setQuests(data));
  }, []);

  return (
    <div>
      {quests.map((quest) => (
        <div>
          <div
            className="card border-dark mb-3"
            style={{ width: "18rem", marginTop: "2rem", marginLeft: "2rem" }}
          >
            <div className="card-body">
              <h3 className="card-title">{quest.QuestGiver}</h3>
              <h5 className="card-title">{quest.QuestName}</h5>
              <p className="card-text">{quest.QuestDescription}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
