import logo from "./logo.svg";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export const TrainerLoad = createContext();

function App() {
  const [trainers, setTrainers] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTrainers(data));
  }, []);

  return (
    <TrainerLoad.Provider value={trainers}>
      <div className="App">
        <Navigation></Navigation>
      </div>
    </TrainerLoad.Provider>
  );
}

export default App;
