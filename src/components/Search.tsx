import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Search = (props: Props) => {
  let navigate = useNavigate();
  const keywordRef = useRef<HTMLInputElement>(null);
  function clearbtn(props: Props) {
    localStorage.clear();
    location.reload();
  }

  return (
    <section className="search">
      <input
        className="search__player"
        type="text"
        placeholder="Search for a player name.."
        ref={keywordRef}
      />
      <button
        className="search__btn"
        onClick={() => {
          const currentValue = keywordRef.current?.value;
          navigate("MatchStat", { state: { playerName: currentValue } });
        }}
      >
        search
      </button>
      <button className="clear__btn" onClick={clearbtn}>
        clear
      </button>
    </section>
  );
};

export default Search;
