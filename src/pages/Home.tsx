import Search from "../components/Search";
import Hero from "../components/Hero";
import Card from "../components/Card";
import { Matchinterface } from "../components/interface";
import { useNavigate } from "react-router-dom";

type Props = {
  database: Array<Matchinterface>;
};

function Home(props: Props) {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Search />
      <Hero />
      <Card
        dataBase={props.database}
        onPlayerClick={(playerName) => {
          navigate("MatchStat", { state: { playerName: playerName } });
        }}
      />
    </div>
  );
}

export default Home;
