import React from "react";
import { useRef } from "react";
import { Matchinterface } from "../components/interface";
import { useNavigate } from "react-router-dom";

type Props = {
  updateDatabase: (match: Matchinterface) => void;
};

const NewMatch = (props: Props) => {
  let navigate = useNavigate();
  const playerOne = useRef<HTMLInputElement>(null);
  const playerTwo = useRef<HTMLInputElement>(null);
  const scoreOne = useRef<HTMLInputElement>(null);
  const scoreTwo = useRef<HTMLInputElement>(null);
  const matchDate = useRef<HTMLInputElement>(null);

  function confirmMatch() {
    if (
      playerTwo.current!.value.length > 0 &&
      playerOne.current!.value.length > 0 &&
      Number(scoreOne.current!.value) >= 0 &&
      Number(scoreOne.current!.value) == Number(scoreTwo.current!.value) &&
      Number(scoreTwo.current!.value) >= 0 &&
      matchDate.current!.value.length > 0
    ) {
      sendToDatabase();
    } else alert("Please, fill the match details correctly");
  }
  const sendToDatabase = () => {
    const newMatch: Matchinterface = {
      playerOne: playerOne.current?.value || "",
      playerTwo: playerTwo.current?.value || "",
      scoreOne: Number(scoreOne.current?.value) || 0,
      scoreTwo: Number(scoreTwo.current?.value) || 0,
      date: matchDate.current?.value || "",
    };

    props.updateDatabase(newMatch);
    navigate("/");
  };

  return (
    <section className="wrapper">
      <h1 className="title">Add new match</h1>

      <section className="add__card">
        <input
          name="matchDate"
          className="match__date"
          type="date"
          placeholder="date"
          ref={matchDate}
        />
        <section className="add__contant">
          <section className="player__one">
            <input
              name="playerName"
              className="player__info"
              type="text"
              placeholder="player 1"
              ref={playerOne}
            />
            <input
              name="playerScore"
              className="player__info"
              type="number"
              placeholder="result 1"
              ref={scoreOne}
            />
          </section>

          <section className="player__two">
            <input
              name="playerName"
              className="player__info"
              type="text"
              placeholder="player 2"
              ref={playerTwo}
            />
            <input
              name="playerScore"
              className="player__info"
              type="number"
              max="5"
              placeholder="ruselt 2"
              ref={scoreTwo}
            />
          </section>
        </section>
      </section>

      <button onClick={() => confirmMatch()} className="save">
        save
      </button>
    </section>
  );
};

export default NewMatch;
