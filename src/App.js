import logo from './logo.svg';
import './App.css';
import { createContext, useEffect, useState } from 'react';

export const TrainerLoad = createContext();

function App() {
  const [trainers,setTrainers] = useState([]);
  useEffect(()=>{
    fetch('data.json').then(res=>res.json()).then(data=>setTrainers(data));
  },[])
 
  return (
    <TrainerLoad.Provider value={trainers}>
    <div className="App">
      
    </div>
    </TrainerLoad.Provider>
  );
}

export default App;
