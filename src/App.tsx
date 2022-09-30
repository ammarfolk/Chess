import { useEffect, useState } from "react";
import data from "./assets/data.json";
import Header from "./components/Header";
import { Matchinterface } from "./components/interface";
import Routes from "./Routes";

export default function App() {
  const [dataBase, setDataBase] = useState(Array<Matchinterface>);

  const addNewMatch = (match: Matchinterface) => {
    dataBase.unshift(match);
    setDataBase(dataBase);
    localStorage.setItem("matches", JSON.stringify(dataBase));
  };

  useEffect(() => {
    let items: Array<Matchinterface> | null = null;
    const rawItems = localStorage.getItem("matches");
    if (rawItems) {
      items = JSON.parse(rawItems);
    }
    if (items) {
      setDataBase(items);
    } else {
      setDataBase(data);
    }
  }, []);

 //localStorage.clear()

  return (
    <div>
      <Header />
      <Routes database={dataBase} updateDatabase={addNewMatch} />
    </div>
  );
}
