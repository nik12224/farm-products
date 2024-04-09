import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import MainPage from "../../pages/main-page";

// обертка для страниц
function PageWrapper({ ...prop }) {
  return (
    <React.Fragment>
      <Header />
      <MainPage {...prop} />
      <Footer />
    </React.Fragment>

  );
}

export default PageWrapper;