import React from "react";
import PageWrapper from "../layout/page-wrapper/page-wrapper";
import farmList from "../../mocks/farmList";
import { GlobalStyle } from "./styles";


export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper farms={farmList}>Контент страницы</PageWrapper>
    </>
  );
}