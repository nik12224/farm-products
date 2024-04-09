import React from "react";
import Hero from "../blocks/hero/hero";
import Advantages from "../blocks/advantages/advantages";

function MainPage({ farms }) {
  return (
    <React.Fragment>
      <Hero />
      <Advantages farms={farms} />
    </React.Fragment>
  );
}

export default MainPage;