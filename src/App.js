import React from "react";

// components
import Header from "./components/Header";
import Cards from "./components/Cards";
import PaidOuts from "./components/PaidOuts";
import Raise from "./components/Raise";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Header />
      <Cards />
      <PaidOuts />
      <Raise />
      <Footer />
    </>
  );
}

export default App;
