import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page";
import { Main } from "./styles";

// обертка для страниц
function PageWrapper({ children, features }) {
  return (
    <React.Fragment>
      <Header />
      <Main>
        <MainPage features={features} />
      </Main>
      <Footer />
    </React.Fragment>

  );
}

export default PageWrapper;