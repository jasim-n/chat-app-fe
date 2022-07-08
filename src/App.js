import "./App.css";
import Leftsidebar from "./components/Leftsidebar";
import Chatlog from "./components/Chatlog";
import { Grid } from "@mui/material";
import ChattingArea from "./components/ChattingArea";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import axios from "axios";

import SignIn from "./components/SignIn";
import Mainpage from "./components/Mainpage";
import Signup from "./components/Signup";
import { createContext, useState } from "react";

// ES6 import or TypeScript
import { io } from "socket.io-client";
const URL = "https://beautiful-wind-cave-54166.herokuapp.com";
// CommonJS
const socket = io(URL);
export const ThemeContext = createContext();

function App() {
  // (async function abc() {
  //   const req = await axios.get(
  //     "https://beautiful-wind-cave-54166.herokuapp.com/"
  //   );
  //   console.log(req);
  // })();

  socket.on("connect", () => {
    console.log(socket.id);
  });
  const [dark, setdark] = useState(1);
  const [displayid,setDisplayid]=useState("");
  return (
    <ThemeContext.Provider value={{ dark, setdark, displayid, setDisplayid }}>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chat" element={<Mainpage />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
