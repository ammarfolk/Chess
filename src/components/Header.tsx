import React from "react";
import { Link } from "react-router-dom";

type Props = {};

import { useLocation } from "react-router-dom";

const Header = (props: Props) => {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/MatchStat">
        <button className="match__profile">
          <img
            className="profile__icon"
            src="https://img.icons8.com/sf-regular/480/000000/file.png"
          />
        </button>
      </Link>
      <Link to="/">
        <h1 className="logo">CHESS</h1>
      </Link>
      <Link to={location.pathname == "/NewMatch" ? "/" : "/NewMatch"}>
        <button className="match__add">
          <img
            className={
              location.pathname == "/NewMatch" ? "close__icon" : "add__icon"
            }
            src="https://img.icons8.com/ios-filled/50/000000/plus-math.png"
          />
        </button>
      </Link>
    </header>
  );
};

export default Header;
