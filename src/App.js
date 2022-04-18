import logo from "./logo.svg";
import "./App.css";
import { createContext, useEffect, useState } from "react";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import ServicesLoad from "./components/ServicesLoad/ServicesLoad";
import NotFound from "./components/NotFound/NotFound";
import Blogs from "./components/Blogs/Blogs";
import RequireAuth from "./components/RequireAuth/RequireAuth";

// Using Context  to pass data to different components
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
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>

          <Route path="/checkout" element={<Checkout></Checkout>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route
            path="/checkout/:trainerId"
            element={
              // Protected 'checkout' route
              <RequireAuth>
                <Checkout></Checkout>
              </RequireAuth>
            }
          ></Route>

          <Route path="/blogs" element={<Blogs></Blogs>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
    </TrainerLoad.Provider>
  );
}

export default App;
