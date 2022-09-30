import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewMatch from "./pages/NewMatch";
import MatchStat from "./pages/MatchStat";
import { Matchinterface } from "./components/interface";

type Props = {
  database: Array<Matchinterface>;
  updateDatabase: (match: Matchinterface) => void;
};

const Paths = (props: Props) => {
  return (
    <Routes>
      <Route path="/" element={<Home database={props.database} />} />
      <Route
        path="/NewMatch"
        element={<NewMatch updateDatabase={props.updateDatabase} />}
      />
      <Route
        path="/MatchStat"
        element={<MatchStat database={props.database} />}
      />
    </Routes>
  );
};
export default Paths;
