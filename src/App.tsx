import React from 'react';
import {GlobalStyle, StyledAppWrapper} from "./styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageBody from "./components/PageBody";

function App() {
  return (
      <StyledAppWrapper>
          <Header />
          <PageBody />
          <Footer />
          <GlobalStyle />
      </StyledAppWrapper>
  );
}

export default App;
