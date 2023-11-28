import React from "react";

// components
import Header from "./components/Header";
import Cards from "./components/Cards";
import PaidOuts from "./components/PaidOuts";
import Raise from "./components/Raise";

function App() {
  return (
    <>
      <Header />
      <Cards />
      <PaidOuts />
      <Raise />
    </>
  );
}

export default App;
