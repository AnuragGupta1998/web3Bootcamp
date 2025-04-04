import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FetchDataWeb2 from "./components/FetchDataWeb2";

function App() {

  return(
  <>
  <div>
    <h1> How Data fetched in web2</h1>
    <FetchDataWeb2 />
  </div>

  </>
  )
 
}

export default App;
