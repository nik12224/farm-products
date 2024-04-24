import React from "react";
import Hero from "../blocks/hero/hero";
import Advantages from "../blocks/advantages/advantages";

function MainPage({ features }) {
  return (
    <React.Fragment>
      <Hero />
      <Advantages features={features} />
    </React.Fragment>
  );
}

export default MainPage;