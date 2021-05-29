import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../scss/App.scss";
import {useHistory} from "react-router";


const Documentation = () => {
    const history = useHistory();
  return (
    <div>
      <h2 className="text-center">Documentation</h2>
      <button className="btn btn-sm btn-outline dark" onClick={() => history.goBack()}>Back</button>
      <div className="flexColumn">
      <Link>Introduction</Link>
      <Link>How the System Works</Link>
      <Link>Why the System Works</Link>
      <Link>Positive Reinforcement</Link>
      <Link>Suggestions</Link>
      <Link>Further Reading</Link>

      </div>
      <br />
      <br />
      <p>
        Welcome to Quest Board, an interactive gamified chore management system
        for people that utilizes the gamified theory of gamification.
        Gamification is the strategic attempt to enhance systems, services,
        organisations and activities in order to create similar experiences to
        those experienced when playing games in order to motivate and engage
        users. his is generally accomplished through the application of
        game-design elements and game principles (dynamics and mechanics) in
        non-game contexts.</p> <br /> <p>Gamification techniques are intended to leverage
        people's natural desires for socializing, learning, mastery,
        competition, achievement, status, self-expression, altruism or closure,
        or simply their response to the framing of a situation as game or play.
        Meaningful stories are game design elements that do not relate to the
        player's performance. The narrative context in which a gamified
        application can be embedded contextualizes activities and characters in
        the game and gives them meaning beyond the mere quest for points and
        achievements.</p> <br /> <p>Sometimes positive reinforcement occurs quite naturally.
        For example, when you hold the door open for someone, you might receive
        praise and a thank you. That affirmation serves as positive
        reinforcement and may make it more likely that you will hold the door
        open for people again in the future. In other cases, someone might
        choose to use positive reinforcement very deliberately in order to train
        and maintain a specific behavior.</p> <br /> <p> Positive reinforcement can also
        strengthen undesirable behaviors. For example, when a child misbehaves
        in a store, some parents might give them extra attention or even buy the
        child a toy. Children quickly learn that by acting out, they can gain
        attention from the parent or even acquire objects that they want.
        Essentially, parents are reinforcing the misbehavior. In this case, a
        better solution would be to use positive reinforcement when the child is
        displaying good behavior.</p> <br /> <p> Instead of rewarding the misbehavior, the
        parents would want to wait until the child is behaving well and then
        reward that good behavior with praise, treats, or even a toy.
      </p>
      <p>
        Welcome to Quest Board, an interactive gamified chore management system
        for people that utilizes the gamified theory of gamification.
        Gamification is the strategic attempt to enhance systems, services,
        organisations and activities in order to create similar experiences to
        those experienced when playing games in order to motivate and engage
        users. his is generally accomplished through the application of
        game-design elements and game principles (dynamics and mechanics) in
        non-game contexts.</p> <br /> <p>Gamification techniques are intended to leverage
        people's natural desires for socializing, learning, mastery,
        competition, achievement, status, self-expression, altruism or closure,
        or simply their response to the framing of a situation as game or play.
        Meaningful stories are game design elements that do not relate to the
        player's performance. The narrative context in which a gamified
        application can be embedded contextualizes activities and characters in
        the game and gives them meaning beyond the mere quest for points and
        achievements.</p> <br /> <p>Sometimes positive reinforcement occurs quite naturally.
        For example, when you hold the door open for someone, you might receive
        praise and a thank you. That affirmation serves as positive
        reinforcement and may make it more likely that you will hold the door
        open for people again in the future. In other cases, someone might
        choose to use positive reinforcement very deliberately in order to train
        and maintain a specific behavior.</p> <br /> <p> Positive reinforcement can also
        strengthen undesirable behaviors. For example, when a child misbehaves
        in a store, some parents might give them extra attention or even buy the
        child a toy. Children quickly learn that by acting out, they can gain
        attention from the parent or even acquire objects that they want.
        Essentially, parents are reinforcing the misbehavior. In this case, a
        better solution would be to use positive reinforcement when the child is
        displaying good behavior.</p> <br /> <p> Instead of rewarding the misbehavior, the
        parents would want to wait until the child is behaving well and then
        reward that good behavior with praise, treats, or even a toy.
      </p>
      <p>
        Welcome to Quest Board, an interactive gamified chore management system
        for people that utilizes the gamified theory of gamification.
        Gamification is the strategic attempt to enhance systems, services,
        organisations and activities in order to create similar experiences to
        those experienced when playing games in order to motivate and engage
        users. his is generally accomplished through the application of
        game-design elements and game principles (dynamics and mechanics) in
        non-game contexts.</p> <br /> <p>Gamification techniques are intended to leverage
        people's natural desires for socializing, learning, mastery,
        competition, achievement, status, self-expression, altruism or closure,
        or simply their response to the framing of a situation as game or play.
        Meaningful stories are game design elements that do not relate to the
        player's performance. The narrative context in which a gamified
        application can be embedded contextualizes activities and characters in
        the game and gives them meaning beyond the mere quest for points and
        achievements.</p> <br /> <p>Sometimes positive reinforcement occurs quite naturally.
        For example, when you hold the door open for someone, you might receive
        praise and a thank you. That affirmation serves as positive
        reinforcement and may make it more likely that you will hold the door
        open for people again in the future. In other cases, someone might
        choose to use positive reinforcement very deliberately in order to train
        and maintain a specific behavior.</p> <br /> <p> Positive reinforcement can also
        strengthen undesirable behaviors. For example, when a child misbehaves
        in a store, some parents might give them extra attention or even buy the
        child a toy. Children quickly learn that by acting out, they can gain
        attention from the parent or even acquire objects that they want.
        Essentially, parents are reinforcing the misbehavior. In this case, a
        better solution would be to use positive reinforcement when the child is
        displaying good behavior.</p> <br /> <p> Instead of rewarding the misbehavior, the
        parents would want to wait until the child is behaving well and then
        reward that good behavior with praise, treats, or even a toy.
      </p>
    </div>
  );
};

export default Documentation;
