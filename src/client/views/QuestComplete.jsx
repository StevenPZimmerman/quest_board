import React from "react";
import { Link, NavLink } from "react-router-dom";

const QuestComplete = ({
  location: {
    state: { ID, Bounty, Reward },
  },
}) => {
  const [stats, setStats] = React.useState([]);

  React.useEffect(() => {
    fetch("/questCompleteBounty/" + Bounty)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  React.useEffect(() => {
    fetch("/questCompleteReward/" + Reward)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

//   React.useEffect(() => {
//     fetch("/stats")
//       .then((res) => res.json())
//       .then((data) => setStats(data));
//   }, []);

  let characterStats = [1, 1, 1, 20];

//   {
//     stats.map((stat) => {
//       characterStats.push(stat.CharacterName);
//       characterStats.push(stat.Currency);
//       characterStats.push(stat.Level);
//       characterStats.push(stat.XP);
//       characterStats.push(stat.HP);
//       characterStats.push(stat.Strength);
//       characterStats.push(stat.Speed);
//       characterStats.push(stat.Defense);
//       characterStats.push(stat.Health);
//       characterStats.push(stat.Mind);
//     });
//   }

  let levelUp = [];

  if (characterStats[2] == 1 && characterStats[3] >= 10) {
    levelUp.push(2);
  }
  // add a bunch of else ifs

  if (levelUp[0] > 1) {
    React.useEffect(() => {
      fetch("/levelUpHP")
        .then((res) => res.json())
        .then((data) => setStats(data));
    }, []);
  }

  if (levelUp[0] > 0) {
    return (
      <div>
        <div>
          <h2>Quest Complete</h2>

          <h3>You Earned {Bounty} Silver!</h3>
          <h3>You Are Awarded {Reward} XP!</h3>
          <h3>You Have Leveled Up!</h3>


          <NavLink to= "/">Keep Quest Posted</NavLink>
          <NavLink className="inventoryLinks" to={{
                pathname: "/MakeQuestInactive",
                state: { ID: ID },
              }}
              
            >Remove Quest</NavLink>

          <br />
          <br />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <h2>Quest Complete</h2>

          <h3>You Earned {Bounty} Silver!</h3>
          <h3>You Are Awarded {Reward} XP!</h3>

          <br />
          <br />
        </div>
      </div>
    );
  }
};

export default QuestComplete;
