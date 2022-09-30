import React from "react";
import Card from "../components/Card";
import { Matchinterface } from "../components/interface";
import { useLocation } from "react-router-dom";

type Props = {
  database: Array<Matchinterface>;
};


const MatchStat = (props: Props) => {
  const { state } = useLocation();
  let playerName = "daemon targaryen";
  if (state && state.playerName) {
    playerName = state.playerName.toLowerCase();
  }

  let matchesWon = 0;
  let matchesLost = 0;

  props.database.forEach( (match) => {
    if (match.playerOne.toLowerCase() == playerName) {
      match.scoreOne > match.scoreTwo ? matchesWon++ : null 
      match.scoreOne < match.scoreTwo ? matchesLost++ : null
    } else if (match.playerTwo.toLowerCase() == playerName) {
      match.scoreTwo > match.scoreOne ? matchesWon++ : null 
      match.scoreTwo < match.scoreOne ? matchesLost++ : null
    }
  })


  return (
    <section className="stat">
      <h1 className="title">Matches statics</h1>
      <h2 className="title__player"> {playerName} </h2>

      <section className="stat__card">
        <section className="stat__contant">
          <h4 className="win__title">You have won</h4>
          <h4 className="stat__info">{matchesWon} Matches</h4>
        </section>

        <section className="stat__contant">
          <h4 className="lose__title">You have lost</h4>
          <h4 className="stat__info">{matchesLost} Matches</h4>
        </section>
      </section>
    </section>

  );

};

export default MatchStat;
