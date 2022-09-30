import React from "react";
import { Matchinterface } from "./interface";

type Props = {
  dataBase: Matchinterface[];
  onPlayerClick: (playerName: String) => void;
};

const Card = (props: Props) => {
  return (
    <section>
      {props.dataBase.map((match) => (
        <section
          className="card"
          key={match.playerOne.concat(match.playerTwo) + match.scoreOne}
        >
          <p className="card__date">{match.date}</p>

          <section className="card__contant">
            <button
              className="player__name"
              onClick={() => props.onPlayerClick(match.playerOne)}
            >
              {match.playerOne}
            </button>
            <p className="player__result">
              <span
                className={match.scoreOne > match.scoreTwo ? "win" : "lose"}
              ></span>
              {match.scoreOne} - {match.scoreTwo}
              <span
                className={match.scoreOne < match.scoreTwo ? "win" : "lose"}
              ></span>
            </p>
            <button
              className="player__name"
              onClick={() => props.onPlayerClick(match.playerTwo)}
            >
              {match.playerTwo}
            </button>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Card;
