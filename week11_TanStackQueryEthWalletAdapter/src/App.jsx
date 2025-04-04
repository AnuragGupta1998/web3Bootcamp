import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FetchDataWeb2 from "./components/FetchDataWeb2";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Post from "./components/TenstackPost";
import Viem from "./components/Viem";

function App() {
  const queryClient = new QueryClient();

  return(
  <>
  {/* for TanstackPost */}
  {/*  <QueryClientProvider client={new QueryClient()}> */}
  <QueryClientProvider client={queryClient}>

    <Post />


   </QueryClientProvider> 

   {/* this is viem library */}
  <Viem />

  </>
  )
 
}

export default App;
