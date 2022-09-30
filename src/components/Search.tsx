import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Search = (props: Props) => {
  let navigate = useNavigate();
  const keywordRef = useRef<HTMLInputElement>(null);

  return (
    <section className="search">
      <input
        className="search__player"
        type="text"
        placeholder="Search for a palyer name.."
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
      <button className="clear__btn" onClick={() => localStorage.clear()}>
        clear
      </button>
    </section>
  );
};

export default Search;
